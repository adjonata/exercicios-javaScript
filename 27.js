// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais
// de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará
// a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida

function crescimento(crianca1, crianca2) {
  const [ altura1, taxa1 ] = crianca1
  const [ altura2, taxa2 ] = crianca2

  if(altura1 < altura2) {
    const anosFaltantes = (altura2 - altura1) / taxa1
    console.log(`A criança 1 é menor que a criança 2, faltando assim ${anosFaltantes.toFixed(1)} anos para ela ficar da altura da criança 2`)
  } else {
    const anosFaltantes = (altura1 - altura2) / taxa2
    console.log(`A criança 2 é menor que a criança 1, faltando assim ${anosFaltantes} anos para ela ficar da altura da criança 1`)
  }
}

crescimento([160, 2.3], [170, 1.6])
crescimento([170, 2.3], [140, 1.6])
crescimento([180, 2.3], [200, 1.6])