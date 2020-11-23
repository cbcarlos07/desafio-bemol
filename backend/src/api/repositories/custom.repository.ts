
import { Sequelize } from "sequelize"
import InteracaoModel from "../../config/db/models/interacao.model"
import ContatoModel from "../../config/db/models/contato.model"
import UsuarioModel from "../../config/db/models/usuario.model"


class CustomRepository {

    listaUsuario(){
        return UsuarioModel.findAll({
            attributes: [
                'id', 'nome', 'email',
                [Sequelize.literal('tipo_usuario.nome'), 'tipo']
            ],
            include: [
                {
                    association: 'tipo_usuario',
                    attributes: []
                }
            ]
        })
    }

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