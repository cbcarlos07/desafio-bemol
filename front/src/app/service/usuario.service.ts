import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import Usuario from '../component/usuario/usuario.model';
@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	private endpoint: string
	constructor(private _http: HttpClient) { 
		this.endpoint = `${environment.host}${environment.endpoint}/usuarios`
	}

	

	save(usuario: Usuario){
		return this._http.post( this.endpoint, usuario )
	}

	update(usuario: Usuario){
		const id = usuario.id
		delete usuario.id
		return this._http.put( `${this.endpoint}/${id}`, usuario )
	}

	delete(id: number){
		return this._http.delete( `${this.endpoint}/${id}` )
	}

	findById( id: number ){
		return this._http.get( `${this.endpoint}/${id}` )
	}

	findAll(){
		return this._http.get( this.endpoint )
	}
}
