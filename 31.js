// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetore imprime a quantidade no console

function negativos(vetor) {
  let totalNegativos = 0
  let listaNegativos = []

  for(let num of vetor) {
    if(num < 0) {
      totalNegativos++
      listaNegativos.push(num)
    }
  }

  console.log(`Contém o total de ${totalNegativos} números negativos no vetor\nSendo eles: ${listaNegativos.join(', ')}`)
}

negativos([0, -8, 3, -5, 10, 23, -23, 60, -61, 85, 620, -780, 90, -1587])