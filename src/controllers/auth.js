const jwt = require('jsonwebtoken');
const response = require('./response');
const Usuarios = require('../repositories/usuarios');
const Password = require('../utils/password');

require('dotenv').config();

const autenticar = async (ctx) => {
	const { email = null, password = null } = ctx.request.body;

	if (!email || !password) {
		return response(ctx, 400, { menssagem: 'Pedido mal-formatado' });
	}

	const usuario = await Usuarios.obterUsuarioPorEmail(email);

	if (usuario) {
		const comparison = await Password.check(password, usuario.senha);
		if (comparison) {
			const token = jwt.sign(
				{ id: usuario.id, email: usuario.email },
				process.env.SECRET || 'cubosacademy',
				{ expiresIn: '10000' }
			);
			return response(ctx, 200, { token });
		}
	}
	return response(ctx, 200, { menssagem: 'Email ou senha incorretos' });
};

module.exports = { autenticar };
