// Escreva um algoritmo que leia o código de um aluno e suas três notas.
// Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3.
// Mostre o código do aluno, suas três notas, a média calculada e
// uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. 
// Repita a operação até que o código lido seja negativo

function nota(cod) {
  const listaAlunos = {
    1: { nome: 'Alex', notas: [6, 7, 8] },
    2: { nome: 'Ana', notas: [6, 4, 5] },
    3: { nome: 'Maria', notas: [7, 4, 4] },
    4: { nome: 'Marcelo', notas: [9, 4, 5] },
    5: { nome: 'Diego', notas: [9, 7, 2] },
    6: { nome: 'Mario', notas: [1, 7, 2] }
  }

  if(listaAlunos.hasOwnProperty(cod)) {
    const { nome, notas } = listaAlunos[cod]
    const notasCrescente = notas.sort((a,b) => a - b)
    
    const mediaPonderada = ((3 * notasCrescente[0]) + (3 * notasCrescente[1]) + (4  * notasCrescente[2])) / (3 + 3 + 4)
    console.log(`O aluno ${nome} foi ${mediaPonderada >= 5 ? 'APROVADO' : 'REPROVADO'} - Notas: ${notas.join(', ')} - Media Ponderada: ${mediaPonderada}`)
  }
  else {
    console.log(`Código ${cod} inválido!`)
  }
}

nota(1)
nota(2)
nota(3)
nota(4)
nota(5)
nota(6)
nota(100)