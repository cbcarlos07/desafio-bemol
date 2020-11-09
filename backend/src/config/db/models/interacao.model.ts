import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
class InteracaoModel extends Model {

    static init( sequelize ){
        super.init({
            usuario_id: DataTypes.INTEGER,
            dt_interacao: DataTypes.DATE
        }, { 
            tableName: 'interacao',
            sequelize 
        })
    }
}
export default InteracaoModel