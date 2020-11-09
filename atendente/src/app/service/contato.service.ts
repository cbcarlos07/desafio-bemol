import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ContatoService {
	private ws: string
	constructor(private _http: HttpClient) { 
		this.ws = `${environment.host}${environment.api}/contato`
	}

	getFindAll(){
		return this._http.get( this.ws )
	}

	findByInteracao(id: number){
		return this._http.get( `${this.ws}/${id}` )
	}

	salvar( dados: any ){
		return this._http.post( `${this.ws}/usuario`, dados )
	}
}
