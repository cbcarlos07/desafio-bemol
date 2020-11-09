import { Component, OnInit } from '@angular/core';
import Interacao from './interacao.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ContatoService } from 'src/app/service/contato.service';

@Component({
	selector: 'app-interacao',
	templateUrl: './interacao.component.html',
	styleUrls: ['./interacao.component.css']
})
export class InteracaoComponent implements OnInit {
	interacoes: Interacao[] = []
	idUsuario: number
	constructor(private _activatedRouter: ActivatedRoute,
				private _location: Location,
				private _contatoService: ContatoService
		) { }
	
	ngOnInit() {
		this.idUsuario = this._activatedRouter.snapshot.params['id'] || 0 
		this.buscar()
	} 

	buscar(){
		this._contatoService
			.getInteracao( this.idUsuario )
			.subscribe((_int: Interacao[])=>{
				this.interacoes = _int
			})
	}

	voltar( ){
		this._location.back()
	}
	
}
