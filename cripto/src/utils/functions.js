export function ValidaDados(dados) {
  if (
    !dados.name?.trim() ||
    !dados.email?.trim() ||
    !dados.password?.trim() ||
    !dados.age
  ) {
    console.log("Preencha todos os campos");
    return false;
  } else {
    console.log("Tudo certo");
  }

  return dados;
}

export function VerificaSenha(value, password) {
  if (value === password) {
    return true;
  } else {
    return false;
  }
}
