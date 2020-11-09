import * as route from 'restify-router'
import usuarioRouter from './usuario.route'
import contatoRouter from './contato.route'
import tipoUsuarioRouter from './tipoUsuario.route'
import cepRouter from './cep.route'
const Route =  route.Router
const router = new Route()



const prefix = '/api/v1'

const routerConfig = deps =>{
    const {app} = deps
    router.add(`${prefix}/usuarios`, usuarioRouter)
    router.add(`${prefix}/contato`, contatoRouter)
    router.add(`${prefix}/tipo-usuario`, tipoUsuarioRouter)
    router.add(`${prefix}/cep`, cepRouter)
    router.applyRoutes( app )

}

export default routerConfig