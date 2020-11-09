import { DataTypes} from 'sequelize'
import { Model } from 'sequelize-typescript'
class UsuarioModel extends Model {

    static init( sequelize ){
        super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            cep: DataTypes.STRING,
            sexo: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            tipo_usuario_id: DataTypes.INTEGER
        }, { 
            tableName: 'usuario',
            sequelize 
        })
    }
}
export default UsuarioModel