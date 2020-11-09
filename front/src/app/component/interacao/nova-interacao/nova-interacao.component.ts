import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ContatoService } from 'src/app/service/contato.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-nova-interacao',
	templateUrl: './nova-interacao.component.html',
	styleUrls: ['./nova-interacao.component.css']
})
export class NovaInteracaoComponent implements OnInit {
	form: FormGroup
	idUsuario: number
	constructor(private _location: Location,
				private _contatoService: ContatoService,
				private _activatedRouter: ActivatedRoute
		) { }
	
	ngOnInit() {
		this.idUsuario = this._activatedRouter.snapshot.params['id'] || 0
		this.form = new FormGroup({
			usuario_id: new FormControl(this.idUsuario),
			mensagem: new FormControl('', {validators: [Validators.required]})
		})
	}

	salvar(){
		this._contatoService
			.salvarInteracao( this.form.value )
			.subscribe(()=>{
				this.voltar()
			})
	}

	voltar(){
		this._location.back()
	}
	
}
