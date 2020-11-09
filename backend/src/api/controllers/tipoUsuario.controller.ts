
import GenericService from '../services/generic.service'
import TipoUsuarioModel from '../../config/db/models/tipoUsuario.model';
let service: any

class TipoUsuarioController {    
    
    constructor(){
        service = new GenericService(TipoUsuarioModel)
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


export default new TipoUsuarioController