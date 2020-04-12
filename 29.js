// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) 
// e quantos deles estão fora do intervalo, escrevendo estas informações.

function intervalo(vetor, intervalo = [10, 20]) {

  let dentroDoIntervalo = 0
  const listaDentroDoIntervalo = []
  let foraDoIntervalo = 0
  const listaForaDoIntervalo = []

  for(let num of vetor) {
    if(num >= intervalo[0] && num <= intervalo[1]) {
      dentroDoIntervalo++
      listaDentroDoIntervalo.push(num)
    }
    else {
      foraDoIntervalo++
      listaForaDoIntervalo.push(num)
    }
  }

  const mensagem = `Tem ${dentroDoIntervalo} números dentro do intervalo (${intervalo}) e ${foraDoIntervalo} números fora, sendo eles:
  Dentro: ${listaDentroDoIntervalo.join(', ')}
  Fora: ${listaForaDoIntervalo.join(', ')}\n`

  console.log(mensagem)
}

intervalo([10, 20, 15, 16, 14, 36, 37, 94, 02, 04, 837])
intervalo([105, 295, 458, 860, 210, 260, 270, 125, 985], [100, 300])

