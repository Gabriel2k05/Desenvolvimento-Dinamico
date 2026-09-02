

// Validações não estão sendo importadas! CORRIGIR

const CURSOS_VALIDOS = [
  "Engenharia da Computação",
  "Sistemas de Informação",
  "Ciência da Computação"
];

export function validarNome(nome: string): string | null {
  const limpo = nome.trim();

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
    
    if (!limpo.includes("@")){
        return "O e-mail precisa conter @";
    }
    return null;
    
}

export function validarTelefone(telefone?: string): string | null {
  if(telefone?.length != 10 && telefone?.length != 11){
    return "O telefone deve conter 10 ou 11 dígitos";
  }
  return null;
}

export function validarCurso(curso: string): string | null {
  if(!CURSOS_VALIDOS.includes(curso)){
    return "Favor incluir um curso válido!";
  }
  return null;
}



