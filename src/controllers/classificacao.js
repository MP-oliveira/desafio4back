/* eslint-disable no-else-return */
const response = require('./response');
const Jogos = require('../repositories/jogos');

const tabela = [];

const ordemAlfabetica = () => {
	tabela.sort((a, b) => a.nome.localeCompare(b.nome));
};

const montarTabela = async () => {
	const jogos = await Jogos.obterTodosOsJogos();
};

const obterClassificacao = async (ctx) => {
	tabela.sort((a, b) => {
		if (a.pontos > b.pontos) {
			return -1;
		} else if (b.pontos > a.pontos) {
			return 1;
		} else if (a.vitorias > b.vitorias) {
			return -1;
		} else if (b.vitorias > a.vitorias) {
			return 1;
		} else if (a.saldoGols > b.saldoGols) {
			return -1;
		} else if (b.saldoGols > a.saldoGols) {
			return 1;
		} else {
			ordemAlfabetica();
		}
		return response(ctx, 200, tabela);
	});
};

module.exports = { obterClassificacao, montarTabela };
