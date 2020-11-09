import * as restifyRouter from 'restify-router'

import cepController from '../api/controllers/cep.controller'
const Router = restifyRouter.Router


const controller = cepController

const cepRouter = new Router()



cepRouter.get('/:cep', controller.buscarCep )



export default cepRouter