// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros

function mediaAritmetica(vetor) {
  const numerosReais = vetor.reduce((ac, at) => ac + at)
  const totalDeValores = vetor.length

  return numerosReais / totalDeValores
}

console.log(mediaAritmetica([10, 20, 109, 104, 128]))
console.log(mediaAritmetica([10, 100]))
