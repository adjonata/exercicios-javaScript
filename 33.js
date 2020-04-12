// Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble.
// Cada um destes vetores deverá conter quatro valores,
// sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores,
// e mostre o resultado no console.
// Todos os elementos do vetor resultado deverão aparecer no console

const vetorInt = [10, 'String 1', 10.1000]
const vetorString = [20, 'String 2', 20.1000]
const vetorDouble = [30, 'String 3', 30.1000]

console.log(vetorInt.concat(vetorString, vetorDouble))
console.log([...vetorInt, ...vetorString, ...vetorDouble])