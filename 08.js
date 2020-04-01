// Pedro joga N jogos de basquete por temporada.
// Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo.
// Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho.
// Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá 
// comparar os valores um a um e irá retornar um VETOR com o número de vezes que ele bateu seu recorde de maior número
// de pontos e quando fez seu pior jogo. (Número do pior jogo).

function jogos(anotacoes) { 
  const verificarRecordes = (recorde, atual) => {
    if(Array.isArray(recorde)) {
      if(atual > recorde[recorde.length - 1]) return [...recorde, atual]
      else return recorde
    }
    else {
      if(atual > recorde) return [atual]
      else return [recorde]
    }
  }

  const menorPontuacao = (menor, atual) => {
    if(menor > atual) {
      return atual
    }
    else {
      return menor
    }
  }

  const resultados = anotacoes.split(' ').map(v => parseInt(v))
  const recordes = resultados.reduce(verificarRecordes)
  const pior = resultados.reduce(menorPontuacao)

  return `Recorde: ${recordes[recordes.length-1]}\nAté chegar no recorde: ${recordes}\nPior jogo: ${pior}`
}

console.log(jogos('4 2 1 5 9 8 0 10 12 15 20'))



