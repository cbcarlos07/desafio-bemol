import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './component/client/client.component';
import { ContatoComponent } from './component/contato/contato.component';


const routes: Routes = [{
  path: '', component: ClientComponent
},
{
  path: 'contato/:id', component: ContatoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
