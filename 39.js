// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos
// de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB
// e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

function trocarVetores(vetor1, vetor2) {
  if(vetor1.length === vetor2.length) {
    for(let i = 0; i < vetor1.length; i++) {
      vetor1[i] = vetor1[i] + vetor2[i]
      vetor2[i] = vetor1[i] - vetor2[i]
      vetor1[i] = vetor1[i] - vetor2[i]
    }

    console.log(`Novo vetor1: ${vetor1}`)
    console.log(`Novo vetor2: ${vetor2}`)
  } else {
    console.log('Os vetores não tem o mesmo tamanho')
    return
  }
}

trocarVetores([10, 28, 30], [20, 31, 12])