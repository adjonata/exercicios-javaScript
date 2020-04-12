// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function paresEImpares(array) {
  let totalImpar = 0
  let totalPar = 0

  let listaImpar = []
  let listaPar = []

  for(num of array) {
    if(num % 2 === 0) {
      totalPar++
      listaPar.push(num)
    }
    else {
      totalImpar++
      listaImpar.push(num)
    }
  }

  console.log(`O Array informado tem ${totalImpar} impares e ${totalPar} pares`)
  console.log(`Sendo eles:\nImpares: ${listaImpar.join(', ')}\nPares: ${listaPar.join(', ')}`)
}

paresEImpares([0, 5, 4, 60, 10, 3, 7, 1, 101, 305, 294, 208, 297, 501, 347, 394])