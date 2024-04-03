import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ParticipantesComponent } from './participantes/participantes.component';
import { OrganizacaoComponent } from './organizacao/organizacao.component';
import { PesquisadorComponent } from './participantes/pesquisador/pesquisador.component';
import { FichaComponent } from './participantes/ficha/ficha.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ParticipantesComponent,
    OrganizacaoComponent,
    PesquisadorComponent,
    FichaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
