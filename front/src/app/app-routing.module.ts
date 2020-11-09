import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioCadastroComponent } from './component/usuario/usuario-cadastro/usuario-cadastro.component';
import { InteracaoComponent } from './component/interacao/interacao.component';
import { ContatoComponent } from './component/interacao/contato/contato.component';
import { NovaInteracaoComponent } from './component/interacao/nova-interacao/nova-interacao.component';


const routes: Routes = [
  {path: '', component: UsuarioComponent},
  {path: 'usuario/cadastro', component: UsuarioCadastroComponent},
  {path: 'usuario/editar/:id', component: UsuarioCadastroComponent},
  {path: 'interacoes/:id', component: InteracaoComponent},
  {path: 'interacoes/cadastro/:id', component: NovaInteracaoComponent},
  {path: 'interacoes/contato/:id', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
