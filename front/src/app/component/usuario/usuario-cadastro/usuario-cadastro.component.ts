import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TipoUsuarioService } from 'src/app/service/tipo-usuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import TipoUsuario from '../tipo-usuario.model';
import Usuario from '../usuario.model';
import * as md5 from 'md5';
import { Location } from '@angular/common';
import { CepService } from 'src/app/service/cep.service';

@Component({
	selector: 'app-usuario-cadastro',
	templateUrl: './usuario-cadastro.component.html',
	styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {
	form: FormGroup
	id: number
	title: string
	tipoUsuarios: TipoUsuario[] = []
	sexos = [{sigla: 'F', texto: 'Feminino'}, {sigla: 'M', texto: 'Masculino'}]
	constructor(private _activatedRouter: ActivatedRoute,
				private _tipoUsuarioService: TipoUsuarioService,
				private _usuarioService: UsuarioService,
				private _location: Location,
				private _cepService: CepService
		) { }
	
	ngOnInit() {
		this.id = this._activatedRouter.snapshot.params['id'] || 0
		console.log(this.id);
		
		this.title = this.id == 0 ? 'Cadastrar Usuário' : 'Atualizar Usuário'
		this.form = new FormGroup({
			id: new FormControl(this.id),
			nome: new FormControl('',{validators: [Validators.required]}),
			cpf: new FormControl('',{validators: [Validators.required]}),
			cep: new FormControl('',{validators: [Validators.required]}),
			rua: new FormControl('',{validators: [Validators.required]}),
			sexo: new FormControl(this.sexos[0].sigla,{validators: [Validators.required]}),
			email: new FormControl('',{validators: [Validators.required]}),
			senha: new FormControl('',{validators: [Validators.required]}),
			tipo_usuario_id: new FormControl('')
		})
		this.init()
	}

	async init(){
		await this.buscarTipoUsuario()
		if( this.id > 0 ){
			this.buscarDados()
		}
	}



	buscarDados(){
		console.log('buscar');
		
		this._usuarioService
			.findById( this.id )
			.subscribe((_usuario: Usuario)=>{
				this.form.controls.nome.setValue( _usuario.nome )
				this.form.controls.cpf.setValue( _usuario.cpf )
				this.form.controls.cep.setValue( _usuario.cep )
				this.form.controls.sexo.setValue( _usuario.sexo )
				this.form.controls.email.setValue( _usuario.email )
				let index = this.tipoUsuarios.findIndex( t => t.id == _usuario.tipo_usuario_id )
				this.form.controls.tipo_usuario_id.setValue( this.tipoUsuarios[index].id )
				
				this.buscarCep()
				
			})
	}

	buscarTipoUsuario(){
		return new Promise((resolve, reject)=>{
			this._tipoUsuarioService
				.findAll()
				.subscribe( (_tipoUsuario: TipoUsuario[])=>{
					this.tipoUsuarios = _tipoUsuario
					this.form.controls.tipo_usuario_id.setValue( this.tipoUsuarios[0].id )
					resolve()
				})
		})
	}

	salvar(){
		delete this.form.value.rua
		if( this.id > 0 ){
			this.editar()
		}else{
			this.novo()
		}
	}

	editar(){
		if( this.form.value.senha ){
			this.form.value.senha = md5( this.form.value.senha )
		}
		this._usuarioService
			.update( this.form.value )
			.subscribe(()=>{
				this.voltar()
			})
	}


	novo(){
		this.form.value.senha = md5( this.form.value.senha )
		delete this.form.value.id
		
		this._usuarioService
			.save( this.form.value )
			.subscribe(()=>{
				this.voltar()
			})
	}

	voltar(){
		this._location.back()
	}

	buscarCep(){
		this._cepService
			.getCep( this.form.controls.cep.value )
			.subscribe((response: any)=>{
				this.form.controls.rua.setValue( response.rua )
			})
	}
	
}
