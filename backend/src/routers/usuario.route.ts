import * as restifyRouter from 'restify-router'

import usuarioController from '../api/controllers/usuario.controller'
const Router = restifyRouter.Router


const controller = usuarioController

const usuarioRouter = new Router()

usuarioRouter.post('', controller.create )

usuarioRouter.put('/:id',  controller.update )

usuarioRouter.del('/:id', controller.delete )

usuarioRouter.get('/:id', controller.findByPK )

usuarioRouter.get('', controller.findAll )

export default usuarioRouter