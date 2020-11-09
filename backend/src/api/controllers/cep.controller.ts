import customService from "../services/custom.service";

class ContatoController {    
    
    

    buscarCep(req, resp){
        
        return customService
                   .buscarCep( req.params.cep )
                    .then( (response: any) =>{
                        resp.send( response,200 )
                    }).catch( e => {
                        console.log(e);
                            
                        resp.send( {msg: "Falha ao tentar adicionar item!"},201 )
                    })
    }


}


export default new ContatoController