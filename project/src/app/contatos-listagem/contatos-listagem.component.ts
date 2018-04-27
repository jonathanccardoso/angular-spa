import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {

  //declarar as proprieddades do component
  contatos = [
  	{id: 1, nome: 'Alexandre', email: 'alexandre99gm@gmail.com'},
  	{id: 2, nome: 'Moises', email: 'moises99gm@gmail.com'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
