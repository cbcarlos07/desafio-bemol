import { Component, OnInit } from '@angular/core';
import  Swal from 'sweetalert2';
import { UsuarioService } from 'src/app/service/usuario.service';
import Usuario from './usuario.model';
@Component({
	selector: 'app-usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
	usuarios: Usuario[] = []
	constructor(private _usuarioService: UsuarioService) { }
	
	ngOnInit() {
		this.buscar()
	}
	
	buscar(){
		this._usuarioService
		.findAll()
		.subscribe( (_usuarios: Usuario[]) =>{
			this.usuarios = _usuarios
		},error => {            
			console.log('error',error);
		})
	}
	
	perguntaRemover( parametro: any ){
		Swal.fire({
			title: 'Atenção!',
			text: `Deseja realmente remover usuário ${parametro.nome}?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sim, quero remover!',
			cancelButtonText: 'Não',
			preConfirm:  () => {
				const  r = this.remover(parametro)
				return r
			},
			allowOutsideClick: () => !Swal.isLoading()
		}).then((result: any) => {
			if (result.value) {
				if( result.value ){
					Swal.fire(
						'Removido!',
						`${parametro.medidor} removido com sucesso`,
						'success'
						).then(()=>{
							this.buscar(  )
						})
					}else{
						console.error(result.value.log);        
						Swal.fire(
							'Oops!',
							`<strong>${parametro.medidor}</strong> não foi removido(a)`,
							'error'
							).then(()=>{
								this.buscar(  )
							})
						}
						
					}
				})
			}
			remover( parametro ){
				return new Promise((resolve, reject)=>{
					this._usuarioService.delete( parametro.id )
					.subscribe( r =>{
						
						resolve({value: true})
						
					})
					
				})
			}
			
			
		}
		