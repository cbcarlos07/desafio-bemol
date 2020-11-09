import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ContatoService {
	
	private endpoint: string
	constructor(private _http: HttpClient) { 
		this.endpoint = `${environment.host}${environment.endpoint}/contato`
	}

	

	getInteracao(usuario: number){
		return this._http.get( `${this.endpoint}/usuario/${usuario}` )
	}

	getContatos(id: number){
		return this._http.get( `${this.endpoint}/${id}` )
	}

	salvarInteracao( dados: any){
		return this._http.post( this.endpoint, dados )
	}


	
}
