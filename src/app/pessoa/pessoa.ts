import { Component } from '@angular/core';
import { Pessoa } from './pessoa.model';

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css',
})
export class Pessoas {

  pessoas: Pessoa[] = [
    {
      id: 1,
      nome: "Gabriel",
      curso: "Análise e Desenvolvimento de Sistemas",
      email: "gabrielmarx04@gmail.com",
      ativo: true,
      vinculo: "aluno",
      telefone: "71999998888"

    },
    {
      id: 2,
      nome: "Ana",
      curso: "Análise e Desenvolvimento de Sistemas",
      email: "ana@gmail.com",
      ativo: true,
      vinculo: "aluno",
      telefone: "71999998888"
    },

    {
      id: 3,
      nome: "Ednei",
      curso: "Análise e Desenvolvimento de Sistemas",
      email: "edn@gmail.com",
      ativo: true,
      vinculo: "aluno",
      telefone: "71999998888"
    },

    {
      id: 4,
      nome: "Cleberson",
      curso: "Análise e Desenvolvimento de Sistemas",
      email: "cleb@gmail.com",
      ativo: true,
      vinculo: "aluno",
    }
  ]
}
