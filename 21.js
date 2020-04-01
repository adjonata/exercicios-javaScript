// Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 
// 1) crianças com menos de 10 anos pagam R$ 80;
// 2) conveniados com idade entre 10 e 30 anos pagam R$ 50; 
// 3) conveniados com idade acima de  30 e até 60 anos pagam R$ 95;
// 4) conveniados acima de 60 anos pagam R$ 130

function planoDeSaude(idade) {
  const brl = valor => `R$ ${valor.toFixed(2)}`

  if(idade < 10) {
    console.log(`Idade: ${idade} - Total: ${brl(100 + 85)}`)
  }
  else if (idade >= 10 && idade <= 30) {
    console.log(`Idade: ${idade} - Total: ${brl(100 + 50)}`)
  }
  else if (idade > 30 && idade <= 60) {
    console.log(`Idade: ${idade} - Total: ${brl(100 + 95)}`)
  }
  else if (idade > 60) {
    console.log(`Idade: ${idade} - Total: ${brl(100 + 130)}`)
  }
  else {
    console.log('Idade inválida!')
  }
}

planoDeSaude(10)
planoDeSaude(8)
planoDeSaude(30)
planoDeSaude(27)
planoDeSaude(43)
planoDeSaude(73)