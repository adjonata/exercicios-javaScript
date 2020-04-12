// Fazer um programa para encontrar todos os pares entre 1 e 100.

function paresDe1a100() {
  let num = 1
  while(num <= 100) {
    num % 2 === 0 && console.log(`${num}) Par`)  

    num++
  }
}

paresDe1a100()