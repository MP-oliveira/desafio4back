/* eslint-disable camelcase */
const db = require('../utils/database');

const obterJogosDaRodada = async (rodada) => {
	const query = `SELECT * FROM jogos WHERE rodada = $1`;
	const result = await db.query({
		text: query,
		values: [rodada],
	});
	return result.rows;
};

const obterTodosOsJogos = async () => {
	const query = `SELECT * FROM jogos`;
	const result = await db.query({
		text: query,
	});
	return result.rows;
};

const atualizarJogo = async (jogo) => {
	const { id, gols_casa, gols_visitante } = jogo;
	const query = ` UPDATE jogos SET gols_casa = $1, gols_visitante = $2 WHERE id = $3`;
	const result = await db.query({
		text: query,
		values: [gols_casa, gols_visitante, id],
	});
	return result.rows.shift();
};

const obterUmJogo = async (id) => {
	const query = `SELECT * FROM jogos WHERE id = $1`;

	const result = await db.query({
		text: query,
		values: [id],
	});
	return result.rows;
};

module.exports = {
	obterJogosDaRodada,
	obterTodosOsJogos,
	obterUmJogo,
	atualizarJogo,
};
