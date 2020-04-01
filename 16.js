// Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica.
// O programa recebe como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores

function calculadora(val1, operador, val2) {
  switch(operador) {
    case '+':
      console.log(val1 + val2)
    break

    case '-':
      console.log(val1 - val2)
    break

    case '*':
      console.log(val1 * val2)
    break

    case '/':
      console.log(val1 / val2)
    break

    default:
      console.log('Operador inválido')
    break
  }
}

calculadora(10, '-', 20)
calculadora(10, '+', 2)
calculadora(10, '*', 2)
calculadora(10, '/', 2)
calculadora(10, ',', 2)