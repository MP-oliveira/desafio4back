const database = require('../utils/database');

const adicionarUsuario = async (usuario) => {
	const { email, senha } = usuario;
	const query = {
		text: `INSERT INTO users (
			email,
			senha
		) VALUES ($1, $2) RETURNING *;`,
		values: [email, senha],
	};
	const result = await database.query(query);
	return result.rows.shift();
};

const obterUsuario = async (id = null) => {
	if (!id) {
		return null;
	}
	const query = `SELECT * FROM users WHERE id = $1`;
	const result = await database.query({
		text: query,
		values: [id],
	});
	return result.rows.shift();
};

const obterUsuarioPorEmail = async (email = null) => {
	if (!email) {
		return null;
	}
	const query = `SELECT * FROM users WHERE email = $1`;
	const result = await database.query({
		text: query,
		values: [email],
	});

	return result.rows.shift();
};

module.exports = {
	obterUsuario,
	obterUsuarioPorEmail,
	adicionarUsuario,
};
