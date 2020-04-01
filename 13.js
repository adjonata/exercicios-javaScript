// Crie um programa que exibe se um dia é dia útil, 
// fim de semana ou dia inválido dado o número referente ao dia.
// Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch

function diasDaSemana() {
  const nomeDoDia = [ 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado' ]
  for(let dia = 1; dia <= 7; dia++) {
    switch(dia) {
      case 1: case 7:
        console.log(`${nomeDoDia[dia - 1]} não é dia útil!`)
      break

      default:
        console.log(`${nomeDoDia[dia - 1]} é dia útil!`)
      break
    }
  }
}

diasDaSemana()