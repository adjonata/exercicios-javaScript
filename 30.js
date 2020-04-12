// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function maiorEMenor(vetor) {
  let maior = vetor[0]
  let menor = vetor[0]

  for(let num of vetor) {
    if(num > maior) maior = num
    if(num < menor) menor = num
  }

  console.log(`Menor número: ${menor},\nMaior número: ${maior}`)
  
}

maiorEMenor([10, 20, 3, 12, 100, 309, 1921, 1231321, 0, 8, -2])