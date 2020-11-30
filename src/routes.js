const Router = require('koa-router');

const router = new Router();
const Cobrancas = require('./controllers/cobrancas/cobrancas');
const Session = require('./middlewares/session');
const Clientes = require('./controllers/cliente/clientes');
const AuthController = require('./controllers/auth');
const EncriptarMiddleware = require('./middlewares/encrypt');
const UsuariosController = require('./controllers/usuarios/usuarios');

router.post('/auth', AuthController.autenticar);
router.post(
	'/usuarios',
	EncriptarMiddleware.encriptar,
	UsuariosController.criarUsuario
);

router.post('/cliente', Session.verificar, Clientes.criarCliente);
router.put('/cliente', Session.verificar, Clientes.editarCliente);

router.post('/cobrancas', Session.verificar, Cobrancas.criarCobranca);

router.get('/cliente', Session.verificar, Clientes.buscarClientesPorPagina);

module.exports = router;
