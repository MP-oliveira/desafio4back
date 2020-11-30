const response = require('../response');
const Usuarios = require('../../repositories/usuarios');

const obterUsuario = async (ctx) => {
	const { id = null } = ctx.params;
	if (id) {
		const result = await Usuarios.obterUsuario(id);
		if (result) {
			return response(ctx, 200, result);
		}
		return response(ctx, 404, { message: 'Usuário não encontrado' });
	}
	return response(ctx, 400, { message: 'Mal formatado' });
};

const obterUsuarioPorEmail = async (ctx) => {
	const { email = null } = ctx.params;
	if (email) {
		const result = await Usuarios.obterUsuarioPorEmail(email);
		if (result) {
			return response(ctx, 200, result);
		}
		return response(ctx, 404, { message: 'Usuário não encontrado' });
	}
	return response(ctx, 400, { message: 'Mal formatado' });
};
module.exports = {
	obterUsuario,
	obterUsuarioPorEmail,
};
