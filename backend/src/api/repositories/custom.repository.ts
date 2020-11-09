
import { Sequelize } from "sequelize"
import InteracaoModel from "../../config/db/models/interacao.model"
import ContatoModel from "../../config/db/models/contato.model"



class CustomRepository {
    findAll() {
        return InteracaoModel.findAll({
            include: [
                {
                    association: 'usuario'
                }
            ]
        })
    }
    
    listarInteracaoPorUsuario(id: number) {
        return InteracaoModel.findAll({
            where: {usuario_id: id}
        })
    }

    

    salvarInteracao(dados: any){
        
        return InteracaoModel.create(dados)
    }

    salvarMensagem(dados: any){
        
        return ContatoModel.create(dados)
    }

    

    listarMensagemPorInteracao(id: number){
        return ContatoModel.findAll(
            {
                
                attributes: [
                    'dt_mensagem',
                    'mensagem'
                    
                ],
                where: {interacao_id: id},
                include: [
                    {
                        association: 'usuario',
                        
                        include: [
                            {
                                association: 'tipo_usuario'
                            }
                        ]
                    }
                ]
            }
        )
    }


}


export default new CustomRepository