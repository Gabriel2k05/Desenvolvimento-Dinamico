import { Component } from '@angular/core';
import { Pessoa } from './pessoa.model';
import { validarPessoa } from './pessoa.validacao';

@Component({
  selector: 'app-pessoa',
  imports: [],
  templateUrl: './pessoa.html',
  styleUrl: './pessoa.css',
})



export class PessoaComponent {

  pessoas: Pessoa[] = [
    {
      id: 1,
      nome: "Gabriel",
      curso: "Engenharia da Computação",
      email: "gabriel@gmail.com",
      ativo: true,
      vinculo: "aluno",
      telefone: "71999998888"

    },
    {
      id: 2,
      nome: "Ana",
      curso: "Sistemas de Informação",
      email: "ana@gmail.com",
      ativo: true,
      vinculo: "aluno",
      telefone: "71999998888"
    },

    {
      id: 3,
      nome: "Ednei",
      curso: "Ciência da Computação",
      email: "edn@gmail.com",
      ativo: true,
      vinculo: "aluno",
      telefone: "71999998888"
    },

    {
      id: 4,
      nome: "Cleberson",
      curso: "Análise e Desenvolvimento de Sistemas",
      email: "cleb#gmail.com",
      ativo: true,
      vinculo: "aluno",
      telefone: "719999999"
    }
  ]

resultados = this.pessoas.map(pessoa => ({
  pessoa,
  erros: validarPessoa(pessoa)
}));

}
