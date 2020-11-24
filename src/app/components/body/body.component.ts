import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
})
export class BodyComponent implements OnInit {
  mostrar = true;

  frase: any = {
    mensaje: 'Un Gran Poder Requiere Una Gran Responsabilidad',
    autor: 'Ben Parker',
  };

  personajes: string[] = [
    'Spirderman',
    'Thor',
    'Capitán America',
    'Iroman',
    'Hulk',
    'Orlando',
    'Tobias',
  ];

  constructor() {
    //const personaje = this.personajes.map((item) => item);
  }

  ngOnInit(): void {}
}
