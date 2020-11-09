class GenericRepository {

    model: any

    constructor( _model: any ){
        this.model = _model
    }

    create(obj: any) {
        return  this.model.create( obj )
    }

    update( id: any,  obj: any ){
       
        return this.model.update( obj, {where: {id}} )
    }

    delete( id: any ){        
        return this.model.destroy({where: {id}})
    }

    findByPk( id: any ){
        return this.model.findByPk( id )
    }

    findAll(){
        return this.model.findAll()
    }

    testConnection(){        
        return this.model.sequelize.query('SELECT 1')
    }
    

}

export default GenericRepository