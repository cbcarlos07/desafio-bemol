import { Component, OnInit } from '@angular/core';
import { ContatoService } from 'src/app/service/contato.service';
import { ActivatedRoute } from '@angular/router';
import { Location, DatePipe } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-contato',
	templateUrl: './contato.component.html',
	styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {
	
	valores = []
	idInteracao: number
	meses = ['Jan.','Fev.','Marc.', 'Abr.', 'Mai.','Jun.','Jul.','Ago.','Set.','Out.','Nov.', 'Dez.']
	form: FormGroup
	constructor(private _contatoService: ContatoService,
				private _activatedRouter: ActivatedRoute,
				private _location: Location,
				private _datepipe: DatePipe
		) { }
	
	ngOnInit() {
		this.idInteracao = this._activatedRouter.snapshot.params['id']
		this.form = new FormGroup({
			interacao_id: new FormControl(this.idInteracao),
			usuario_id: new FormControl( environment.atendente ),
			mensagem: new FormControl('',{validators: [Validators.required]})
		})
		this.buscar()
	}

	

	buscar(){
		this._contatoService
			.findByInteracao( this.idInteracao )
			.subscribe((_contatos)=>{
				this.valores = this.montarValores(_contatos)
			})
	}

	private montarValores(valores){
		let dados = []
		valores.forEach((element: any) => {
			let dataPersonalidada  = this.convertData( element.dt_mensagem )
			let dataArray = dataPersonalidada.split('-')
			let findIndex = dados.findIndex( d => d.data == dataArray[0])
			
			if( findIndex == -1){
				dados.push( {
					data: dataArray[0],
					contato: [
						{
							usuario: element.usuario,
							mensagem: element.mensagem,
							hora: dataArray[1],
							tipo_usuario: element.usuario.tipo_usuario.nome
						}
					]
				} )
			}else{
				dados[findIndex].contato.push({
					usuario: element.usuario,
					mensagem: element.mensagem,
					hora: dataArray[1],
					tipo_usuario: element.usuario.tipo_usuario.nome
				})
			}
		});
		return dados
	}

	voltar(){
		this._location.back()
	}

	private convertData( data ){
		
		let dataAtual =this._datepipe.transform(data, 'dd/MM/yyyy hh:mm:ss')
		let dataArray = dataAtual.split(' ')
		let somenteDataArray = dataArray[0].split('/')
		let dataPersonalziada = `${somenteDataArray[0]} ${this.meses[ +somenteDataArray[1] - 1 ]} ${somenteDataArray[2]}`
		let novaData = `${dataPersonalziada}-${dataArray[1]}`
		return novaData		
	}

	salvar(){
		this._contatoService
			.salvar( this.form.value )
			.subscribe(()=>{
				this.form.controls.mensagem.setValue(null)
				this.buscar()
			} )
	}
	
}
