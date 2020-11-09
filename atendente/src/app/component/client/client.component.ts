import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/service/contato.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
	interacoes = [ ]
	constructor(private _contatoService: ContatoService) { }

	ngOnInit() {
		this.buscar()
	}

	buscar(){
		this._contatoService
			.getFindAll()
			.subscribe( (response: any)=>{
				this.interacoes = response
			})
	}

}
