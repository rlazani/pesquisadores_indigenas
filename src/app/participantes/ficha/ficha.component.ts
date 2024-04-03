import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ficha } from './ficha';
import { Pesquisador } from '../pesquisador';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.css'],
})
export class FichaComponent implements OnInit {
  constructor() {}

  @Input() objetoFilho: Pesquisador | undefined;

  ngOnInit(): void {}
  @Output() sinalFechamento = new EventEmitter<string>();

  fecharFicha() {
    this.sinalFechamento.emit('ficha-fechada');
  }
}
