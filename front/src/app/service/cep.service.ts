import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CepService {
	
	private endpoint: string
	constructor(private _http: HttpClient) { 
		this.endpoint = `${environment.host}${environment.endpoint}/cep`
	}

	

	getCep(cep: string){
		return this._http.get( `${this.endpoint}/${cep}`  )
	}
}
