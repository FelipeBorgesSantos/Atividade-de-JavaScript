// Escreva um programa que receba uma operação matemática e dois operandos:

// "soma": Adicionar os dois operandos. // "subtração": Subtrair o segundo operando do primeiro.
// "multiplicação": Multiplicar os dois operandos. // "divisão": Dividir o primeiro operando pelo segundo.
function calculadora(operacao, num1, num2) {
  let resultado;
  let i = 0;

  if (
    operacao !== "soma" &&
    operacao !== "subtração" &&
    operacao !== "multiplicação" &&
    operacao !== "divisão"
  ) {
    return "Operação inválida";
  }
  while (i < 1) {
    if (operacao == "soma") {
      resultado = num1 + num2;
    } else if (operacao == "subtração") {
      resultado = num1 + num2;
    } else if (operacao == "multiplicação") {
      resultado = num1 + num2;
    } else if (operacao == "divisão") {
      if (num2 != 0) {
        resultado = num1 / num2;
      } else {
        return "Não é possível dividir por zero";
      }
    }
    i++;
  }

  return resultado;
}

console.log(calculadora("soma", 10, 6));
console.log(calculadora("subtração", 10, 6));
console.log(calculadora("multiplicação", 10, 2));
console.log(calculadora("divisão", 10, 2));
console.log(calculadora("divisão", 10, 0));
