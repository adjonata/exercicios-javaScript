// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número inteiro.
// Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada elemento
// pelo número passado como parâmetro. 
// A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5

function multiplicarValores(vetor, base) {
  let vetorCriado = []

  for(let num of vetor) {
    vetorCriado.push(num * base)
  }

  return vetorCriado
}

function multiplicarValoresMaiorQue5(vetor, base) {
  let vetorCriado = []

  for(let num of vetor) {
    if(num > 5) vetorCriado.push(num * base)
  }

  return vetorCriado
}

console.log(multiplicarValores([10, 20, 40, 100, 400, 900], 2))
console.log(multiplicarValoresMaiorQue5([3, 1, 2, 10, 50, 1000], 3))