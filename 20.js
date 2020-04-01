// Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
// para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10, R$ 5 e R$ 1.
// Seu programa deve mostrar apenas as notas utilizadas.
// Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação 
// (note que não foram exibidas informações sobre as demais cédulas):
// 1 nota(s) de R$ 10.
// 1 nota(s) de R$ 5.
// 3 nota(s) de R$ 1

function notasUtilizadas(valor) {
  const brl = valor => `R$ ${valor.toFixed(2)}`

  console.log(`=== Total de notas utilizadas para formar ${brl(valor)} ===`)
  const notas = [100, 50, 20, 10, 5, 2]
  let sobra = valor

  for(let nota of notas) {
    if(sobra >= nota) {
      const totalDeNotas = parseInt((sobra / nota).toString().split('.')[0])
      console.log(`${totalDeNotas} nota(s) de ${brl(nota)}`)
      sobra -= nota * totalDeNotas
    }
  }

  console.log(`Sobrando ${sobra.toFixed(2)} centavos!`)
  console.log('=======================================')
}

notasUtilizadas(579)
notasUtilizadas(2159)