// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. 
// A função recebe comoparâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. 
// A anuidade deve ser paga no mês de janeiro. 
// Por mês, é cobrado 5% de juros (sob o regime de juros compostos). 
// O retorno deve ser o valor a ser pago para o respectivo mês escolhido
// Valor da anuidade = R$ 1000,00

function anuidade(mes, valor) {
  const brl = valor => `R$ ${valor.toFixed(2)}`
  let total = 0
  let atraso = mes - 1

  if(mes >= 1 && mes <= 12) {
    total = valor * ((1 + 0.05) ** atraso)

    console.log(`Valor a ser pago ${brl(total)}`)
    return total
  }
  else {
    console.log('Mês inválido')
    return false
  }
}

anuidade(3, 1000)
anuidade(4, 100)