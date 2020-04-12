// Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while

function elevenHelloWorlds() {
  let total = 1
  while(total <= 11) {
    console.log(`${total}) Hello World!`)
    total++
  }
}

elevenHelloWorlds()