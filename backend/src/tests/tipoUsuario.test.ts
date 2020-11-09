import test from 'ava'
import inicializarDB from './setup'
inicializarDB()


import GenericService from '../api/services/generic.service'
import TipoUsuarioModel from '../config/db/models/tipoUsuario.model'

let service = new GenericService( TipoUsuarioModel )



let cliente = {	
	nome: "TIPO TEST"
}


const create = () => service.create( cliente )

test.beforeEach(t =>  TipoUsuarioModel.destroy({ truncate : true, cascade: false }) )
test.after.always(t => TipoUsuarioModel.destroy({ truncate : true, cascade: false }))

test.serial('deveInserirTipoUsuario', async t =>{
    
    let client = await create()
    
    t.is(client.id, 1)    
    t.is(client.nome, 'TIPO TEST')    
})


test.serial('deveObterTipoUsuarioPorId', async t =>{
    await create()
    let obj = await service.findByPk(1)
    t.is(obj.id, 1)
})

test.serial('deveAtualizarTipoUsuario', async t =>{
    await create()
    let obj = await service.update(1, { nome: 'TIPO TEST UPDATE' })
    
    t.is(obj[0], 1)        
})

test('deveRemoverTipoUsuario', async t =>{
    await create()
    let obj = await service.delete(1)
    t.is(obj, 1)
})

test('deveListarTipoUsuarios', async t =>{
    await create()
    let obj = await service.findAll()
    t.not(obj.length, 0)
})
  