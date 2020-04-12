// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada
// uma demodo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9
// seja atribuído o conceito C, de 7,0 a 8,9 o conceito B e de 9,0 a 10,0 o conceito A.

function avaliarNotas(notas) {
  for(let nota of notas) {
    let conceito = ''
    if(nota >= 0 && nota < 5) conceito = 'D'
    else if(nota >= 5 && nota < 7) conceito = 'C'
    else if(nota >= 7 && nota < 9) conceito = 'B'
    else if(nota >= 9 && nota <= 10) conceito = 'A'

    console.log(`A nota ${nota} é de conceito ${conceito}`)
  }
}

avaliarNotas([10, 2, 6, 8, 3, 9, 5.6, 7.9, 6.9, 8.9])