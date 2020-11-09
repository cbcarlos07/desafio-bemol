
import GenericService from '../services/generic.service'
import UsuarioModel from '../../config/db/models/usuario.model';
let service: any

class UsuarioController {    
    
    constructor(){
        service = new GenericService(UsuarioModel)
    }

    create(req, resp){
        
        return service
                   .create( req.body )
                    .then( (response: any) =>{
                        resp.send( {msg: "Item salvo com sucesso!", id: response.id},200 )
                    }).catch( e => {
                        console.log(e);
                            
                        resp.send( {msg: "Falha ao tentar adicionar item!"},201 )
                    })
    }

    update( req, resp ){
        return service
                   .update( req.params.id, req.body )
                   .then( (response: any) =>{                       
                       
                        resp.send( {msg: "Item atualizado com sucesso!"},200 )
                    }).catch( e => {
                        console.log(e);
                        
                    resp.send( {msg: "Falha ao tentar atualizar item!"},201 )
                    })
    }

    delete( req, resp ){
        return service
                   .delete( req.params.id )
                   .then( (response: any) =>{
                        resp.send( {msg: "Item removido com sucesso!"},200 )
                    }).catch( e => {
                        resp.send( {msg: "Falha ao tentar remover item!"},201 )
                    })
    }

    findByPK(req, resp){
        return service
                   .findByPk( req.params.id )
                   .then( (response: any) =>{
                        resp.send( response,200 )
                    }).catch( e => {
                        resp.send( {msg: "Falha ao tentar remover item!"},201 )
                    })
    }

    findAll( req, resp ){
        return service
                   .findAll( )
                   .then( (response: any) =>{
                        resp.send( response,200 )
                    }).catch( e => {
                        resp.send( {msg: "Falha ao buscar item!"},201 )
                    })
    }

}


export default new UsuarioController