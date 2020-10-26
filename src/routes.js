const Router = require('koa-router');
const Session = require('./middlewares/session');

const router = new Router();
const Password = require('./utils/password');

const classificacao = require('./controllers/classificacao');
const jogos = require('./controllers/jogos');
const Auth = require('./controllers/auth');

router.post('/jogos', Session.verify, jogos.editarUmJogo);
router.post('/auth', Password.encrypt, Auth.autenticar);
router.get('/jogos/:rodada', jogos.obterJogosDeUmaRodada);
router.get('/classificacao', classificacao.obterClassificacao);

module.exports = router;
