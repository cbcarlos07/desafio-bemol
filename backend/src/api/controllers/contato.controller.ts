import customService from "../services/custom.service";
import GenericService from "../services/generic.service";
import InteracaoModel from "../../config/db/models/interacao.model";


class ContatoController {    
    
    

    findAll(req, res){
        customService
            .findAll()
            .then( (response: any) =>{
                res.send( response,200 )
            }).catch( e => {
                res.send( {msg: "Falha ao tentar adicionar item!"},201 )
            })
    }

    adicionarInteracao(req, resp){
        
        return customService
                   .adicionarInteracao( req.body )
                    .then( (response: any) =>{
                        resp.send( {msg: "Item salvo com sucesso!", id: response.id},200 )
                    }).catch( e => {
                        resp.send( {msg: "Falha ao tentar adicionar item!"},201 )
                    })
    }

    salvarMensagem(req, resp){
        
        return customService
                   .salvarMensagem( req.body )
                    .then( (response: any) =>{
                        resp.send( {msg: "Item salvo com sucesso!", id: response.id},200 )
                    }).catch( e => {
                        console.log(e);
                            
                        resp.send( {msg: "Falha ao tentar adicionar item!"},201 )
                    })
    }

    listarMensagemPorInteracao( req, resp ){
        return customService
                   .listarMensagemPorInteracao( req.params.id )
                   .then( (response: any) =>{
                        resp.send( response,200 )
                    }).catch( e => {
                        console.log(e);
                        
                        resp.send( {msg: "Falha ao tentar atualizar item!"},201 )
                    })
    }

    listarInteracaoPorUsuario(req, resp ){
        return customService
                   .listarInteracaoPorUsuario( req.params.id )
                   .then( (response: any) =>{
                        resp.send( response,200 )
                    }).catch( e => {
                        console.log(e);
                        
                        resp.send( {msg: "Falha ao tentar atualizar item!"},201 )
                    })
    }

}


export default new ContatoController