import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './common/menu/menu.component';
import { HeaderComponent } from './common/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from "@angular/common";
import { UsuarioComponent } from './component/usuario/usuario.component';
import { UsuarioCadastroComponent } from './component/usuario/usuario-cadastro/usuario-cadastro.component';
import { InteracaoComponent } from './component/interacao/interacao.component';
import { ContatoComponent } from './component/interacao/contato/contato.component';
import { NovaInteracaoComponent } from './component/interacao/nova-interacao/nova-interacao.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    UsuarioComponent,
    UsuarioCadastroComponent,
    InteracaoComponent,
    ContatoComponent,
    NovaInteracaoComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
