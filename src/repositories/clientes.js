const database = require('../utils/database');

const criarCliente = async (cliente) => {
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

const editarCliente = async (cliente) => {
	const { nome, cpf, email, id } = cliente;
	const query = {
		text: ` UPDATE cliente
				SET nome= $1, 
				cpf = $2,
				email= $3,
				WHERE id = $4 `,
		values: [nome, cpf, email, id],
	};
	console.log(query);
	const result = await database.query(query);

	return result.rows.shift();
};

const obterClientePorEmail = async (email = null) => {
	if (!email) {
		return null;
	}
	const query = `SELECT * FROM clientes WHERE email = $1`;
	const result = await database.query({
		text: query,
		values: [email],
	});

	return result.rows.shift();
};

const buscarClientPorTexto = async (
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
	criarCliente,
	obterClientePorEmail,
	editarCliente,
	buscarClientPorTexto,
};
