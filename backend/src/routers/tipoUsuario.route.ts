import * as restifyRouter from 'restify-router'

import tipoUsuarioController from '../api/controllers/tipoUsuario.controller'
const Router = restifyRouter.Router


const controller = tipoUsuarioController

const tipoUsuarioRouter = new Router()

tipoUsuarioRouter.get('', controller.findAll )

export default tipoUsuarioRouter