import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pesquisador } from '../pesquisador';

@Component({
  selector: 'app-pesquisador',
  templateUrl: './pesquisador.component.html',
  styleUrls: ['./pesquisador.component.css'],
})
export class PesquisadorComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  @Input()
  pesquisador!: Pesquisador;
}
