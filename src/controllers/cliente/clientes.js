const response = require('../response');

const buscarClientePorPagina = async (ctx) => {
	const { texto, clientesPorPagina, ofsset } = ctx.query;

	const usuarioId = ctx.state.id;

	const dados = await Clientes.buscarClientePorTexto(
		usuarioId,
		texto,
		clientesPorPagina,
		ofsset
	);
	return response.reponseBuscandoCliente(ctx, 200, dados);
};

const listarClientesPorPagina = async (ctx) => {
	const usuarioId = ctx.state.id;
	const { clienteId, nome, email, tel } = ctx.query;

	const dados = await Clientes.editarCliente(
		clienteId,
		usuarioId,
		nome,
		email,
		tel
	);
	return response.reponseBuscandoCliente(ctx, 200, dados);
};

module.exports = { buscarClientePorPagina, listarClientesPorPagina };
