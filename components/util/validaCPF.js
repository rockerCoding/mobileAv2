/* pesoPrimeiroDigitoVerificar = [10, 9, 8, 7, 6, 5, 4, 3, 2]
pesoSegundoDigitoVerificar = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]

validarCPF() {
    let cpf = this.removerCaracteresDoCPF(this.cpfMotorista.value)

    if (cpf.length != 11) return false;
    if (this.verificarNumerosRepetidos) return false;

    let primeiroDigito = this.calcularPrimeiroDigitoVerificador(cpf)
    let segundoDigito = this.calcularSegundoDigitoVerificador(cpf)

    if (
      primeiroDigito != parseInt(cpf.charAt(9)) ||
      segundoDigito != parseInt(cpf.charAt(10))
    ) {
      return false;
    }

    return true;
  }

  removerCaracteresDoCPF(cpf: string) {
    return cpf.replace(/[^\d]+/g, "");
  }

  verificarNumerosRepetidos(cpf: string) {
    let primeiroDigito = cpf.charAt(0)

    for (let i = 1; i < cpf.length; i++) {
      if (cpf.charAt(1) !== primeiroDigito) return false;
    }

    return true
  }

  calcularPrimeiroDigitoVerificador(cpf: string) {
    let soma = 0

    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * this.pesoPrimeiroDigitoVerificar[i]
    }

    let resto = soma % 11
    let digito = resto < 2 ?
      0 :
      11 - resto;

    return digito;
  }

  calcularSegundoDigitoVerificador(cpf) {
    let soma = 0

    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * this.pesoSegundoDigitoVerificar[i]
    }

    let resto = soma % 11
    let digito = resto < 2 ?
      0 :
      11 - resto;

    return digito;
  }
 */