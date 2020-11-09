import customRepository from "../repositories/custom.repository";
import { api } from "../../utils/api";

class CustomService{

    
    salvarInteracao(dados: any){
        return customRepository.salvarInteracao(dados)
    }

    adicionarInteracao(dados: any){
        
        return new Promise(async (resolve, reject)=>{
            let objUsuario = { usuario_id: dados.usuario_id }
            let objInteracao = await this.salvarInteracao( objUsuario )
            let idInteracao = objInteracao.dataValues.id
            let objContato = {
                interacao_id: idInteracao,
                usuario_id: dados.usuario_id,
                mensagem: dados.mensagem
            }
            this.salvarMensagem( objContato )
                .then( response =>{
                    resolve(response)
                })
        })
    }

    salvarMensagem(dados: any){
        return customRepository.salvarMensagem( dados )
    }

    listarMensagemPorInteracao(id: number){
        return customRepository.listarMensagemPorInteracao( id )
    }

    listarInteracaoPorUsuario(id: number){
        return customRepository.listarInteracaoPorUsuario( id )
    }

    buscarCep(cep: string){
        return new Promise((resolve, reject)=>{
            api.get( `/ws/${cep}/json` )
               .then( response =>{
                   resolve({rua: response.data.logradouro})
               })
        })
    }

}

export default new CustomService