import { Pessoa } from "./pessoa.model";

// Validações não estão sendo importadas! Corrigidooooooooooooooooooooooooooooooooooooooooooooooo!



export function validarNome(nome: string): string | null {
  const limpo = nome.trim();

  if (!limpo){
    return "O nome é obrigatorio"
  }

  if (limpo.length < 3) {
    return 'O nome deve ter ao menos 3 caracteres.';
  }
  if (/\d/.test(limpo)) {
    return 'O nome não pode conter números.';
  }
  return null;
}

export function validarEmail(email: string): string | null {
    const limpo = email.trim();
    
    // Se não for informado 
    if (!limpo){
      return "O email é obrigatorio"
    }

    // Explicação porca (Padrão de formato) 
    const regexEmail = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

    if (!regexEmail.test(limpo)) {
      return "O e-mail deve estar em um formato válido (ex: usuario@dominio.com)."
    }

    return null;
    
}

export function validarTelefone(telefone?: string): string | null {

    // Se não for informado 
    if (!telefone) {
      return null;
    }

    // Remove outros caracteres 
    const apenasNumeros = telefone.replace(/\D/g, '');

    // Se tem 10 ou 11 digitos
    if (apenasNumeros.length !== 10 && apenasNumeros.length !== 11){
      return "O telefone deve ter 10 ou 11 dígitos com DDD";
    }

  return null;
}

export function validarCurso(curso: string): string | null {
  if(!CURSOS_VALIDOS.includes(curso)){
    return "Favor incluir um curso válido!";
  }
  return null;
}

const CURSOS_VALIDOS = [
  "Engenharia da Computação",
  "Sistemas de Informação",
  "Ciência da Computação"
];

export function validarPessoa(pessoa: Pessoa): string[] {
  // chame as quatro, descarte os nulls, devolva as mensagens

  const erros: (string | null)[] = [
    validarNome(pessoa.nome),
    validarEmail(pessoa.email),
    validarTelefone(pessoa.telefone),
    validarCurso(pessoa.curso)
  ]

  // Filtra descartando os nulls
  return erros.filter((erro): erro is string => erro !== null);
}





