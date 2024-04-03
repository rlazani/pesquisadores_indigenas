import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  carregar: string = 'ficha-fechada-app';
  abrirFicha(evento: string) {
    this.carregar = evento;
  }
  fecharFicha(evento: string) {
    this.carregar = evento;
  }
}
