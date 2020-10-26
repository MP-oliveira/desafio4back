/* eslint-disable camelcase */

const response = require('./response');
const jogos = require('../repositories/jogos');

const obterJogosDeUmaRodada = async (ctx) => {
	const { rodada = null } = ctx.params;
	if (rodada) {
		const result = await jogos.obterJogosDaRodada(rodada);
		if (result) {
			return response(ctx, 200, result);
		}
	}
	return response(ctx, 400, { menssagem: 'Error' });
};

const editarUmJogo = async (ctx) => {
	const {
		id = null,
		gols_casa = null,
		gols_visitante = null,
	} = ctx.request.body;
	if (id) {
		const result = await jogos.obterUmJogo(id);
		if (result) {
			const jogoAtualizado = { gols_casa, gols_visitante };
			const jogofinal = await jogos.atualizarJogo(jogoAtualizado);

			return response(ctx, 200, jogofinal);
		}
	}
	return response(ctx, 400, { mensagem: 'Error' });
};

/* eslint-disable camelcase */

module.exports = { obterJogosDeUmaRodada, editarUmJogo };
