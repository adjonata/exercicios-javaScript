// Faça um algoritmo que calcule o fatorial de um número

function fatorial(num) {
  if(num === 0) {
    return `Fatorial de 0 é 1`
  }
  else if(num > 0) {
    let fatorial = 1
    for(let i = 1; i <= num; i++) {
      fatorial *= i
    }
    return `Fatorial de ${num} é ${fatorial}`
  }
  else {
    return `Número inválido!`
  }
}

console.log(fatorial(10))
console.log(fatorial(20))
console.log(fatorial(4))
console.log(fatorial(6))