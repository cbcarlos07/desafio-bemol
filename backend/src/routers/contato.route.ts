import * as restifyRouter from 'restify-router'

import contatoController from '../api/controllers/contato.controller'
const Router = restifyRouter.Router


const controller = contatoController

const contatoRouter = new Router()

contatoRouter.post('', controller.adicionarInteracao )


contatoRouter.get('/:id', controller.listarMensagemPorInteracao )

contatoRouter.get('/usuario/:id', controller.listarInteracaoPorUsuario )

contatoRouter.post('/usuario', controller.salvarMensagem )




export default contatoRouter