// Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
// Dito isto,elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
// Para isso, sua função deve receber trêsparâmetros, “ax2”, “bx” e “c”, 
// de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,-5, 12. 
// Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais.
// Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:“Delta é negativo”.

const raizQuadrada = num => Math.sqrt(num)

function bhaskara(ax2, bx, c) {
  const delta = (bx**2) - (4 * ax2 * c)

  if(delta < 0) {
    return `Delta é negativo! ${delta}`
  }
  else {
    return [
      (-bx + raizQuadrada(delta)) / (2 * ax2),
      (-bx - raizQuadrada(delta)) / (2 * ax2),
    ]
  }
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 7, 2))
console.log(bhaskara(3, 1, 2))