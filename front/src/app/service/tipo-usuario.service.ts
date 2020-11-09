import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class TipoUsuarioService {
	
	private endpoint: string
	constructor(private _http: HttpClient) { 
		this.endpoint = `${environment.host}${environment.endpoint}/tipo-usuario`
	}


	findAll(){
		return this._http.get( this.endpoint )
	}
}
