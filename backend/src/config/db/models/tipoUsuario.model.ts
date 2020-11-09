import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
class TipoUsuarioModel extends Model {

    static init( sequelize ){
        super.init({
            nome: DataTypes.STRING            
        }, { 
            tableName: 'tipo_usuario',
            sequelize 
        })
    }
}
export default TipoUsuarioModel