
const Sequelize = require('sequelize')
const dbConfig = require('../config/database')
const connection = new Sequelize( dbConfig )

import TipoUsuarioModel from "../models/tipoUsuario.model"
import UsuarioModel from "../models/usuario.model"
import InteracaoModel from '../models/interacao.model'
import ContatoModel from "../models/contato.model"
import AssociationsTable from "../models/associate.model"


TipoUsuarioModel.init( connection )
UsuarioModel.init( connection )
InteracaoModel.init( connection )
ContatoModel.init( connection )

AssociationsTable.associate( ContatoModel, UsuarioModel, 'usuario_id', 'usuario' )
AssociationsTable.associate( UsuarioModel, TipoUsuarioModel, 'tipo_usuario_id', 'tipo_usuario' )

export default connection