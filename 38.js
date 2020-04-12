// Escreva uma função que receba dois parâmetros início e fim.
// Essa função deve imprimir todos os números ímpares que estão entre esses valores.
// Por padrão os valores devem ser 0 para início e 100 para fim.
// Atente para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor

function imparesNoIntervalo(inicio = 0, fim = 100) {
  const realInicio = inicio > fim ? fim : inicio
  const realFim = fim < inicio ? inicio : fim

  const impares = []

  for(let i = realInicio; i <= realFim; i++) {
    if(i % 2 !== 0) impares.push(i)
  }

  console.log(`Contém ${impares.length} impáres no intervalo de ${inicio} à ${fim},\nSendo eles: ${impares.join(', ')}`)
}

imparesNoIntervalo(10, 20)
imparesNoIntervalo(100, 150)