const database = require('../utils/database');

const criarCobranca = async (cliente) => {
	const { nome, cpf, email, tel } = cliente;
	const query = {
		text: `INSERT INTO clientes (
			nome,
			cpf,
			email,
			tel
		) VALUES ($1, $2, $3, $4) RETURNING *; `,
		values: [nome, cpf, email, tel],
	};
	console.log(query);
	const result = await database.query(query);

	return result.rows.shift();
};

const buscarCobrancaPorTexto = async (
	usuarioId,
	texto,
	clientePorPagina,
	offset
) => {
	const query = {
		text: `SELECT * FROM clients 
			   WHERE usuario_id = $1 
			   AND cliente_nome 
			   LIKE '%${texto}%' 
			   LIMIT $2 
			   OFFSET $3`,
		values: [usuarioId, clientePorPagina, offset],
	};
	console.log(query);
	const result = await database.query(query);

	return result.rows.shift();
};

module.exports = {
	criarCobranca,
	buscarCobrancaPorTexto,
};
