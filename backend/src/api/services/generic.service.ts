import GenericRepository from "../repositories/generic.repository"


class GenericService {
    model: any    
    genericRepository: any
    constructor(_model: any){
        
        this.model = _model
        this.genericRepository = new GenericRepository( _model )
    }

    create(obj: any) {
        return  this.genericRepository.create( obj )
    }

    update( id: any,  obj: any ){
       
        return this.genericRepository.update( id, obj )
    }

    delete( id: any ){        
        return this.genericRepository.delete(id)
    }

    findByPk( id: any ){
        return this.genericRepository.findByPk( id )
    }

    findAll(){
        return this.genericRepository.findAll()
    }

    testConnection(){
        return this.genericRepository.testConnection()
    }
}

export default GenericService