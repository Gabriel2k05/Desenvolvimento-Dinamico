import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css',
})
export class Pessoa {
  nome = "Gabriel";
  curso = "Análise e Desenvolvimento de Sistemas";
  email = "gabrielmarx04@gmail.com";
}
