import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
class ContatoModel extends Model {

    static init( sequelize ){
        super.init({
            interacao_id: DataTypes.INTEGER,
            usuario_id: DataTypes.INTEGER,
            dt_mensagem: DataTypes.STRING,
            mensagem: DataTypes.STRING
        }, { 
            tableName: 'contato',
            sequelize 
        })
    }
}
export default ContatoModel