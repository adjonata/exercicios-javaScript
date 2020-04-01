/* 
Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
  Equilátero: Os três lados são iguais. 
  Isósceles:  Dois lados iguais. 
  Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação 
quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo)
*/

function tipoDeTriangulo(lado1, lado2, lado3) {
  if(lado1 === lado2 && lado2 === lado3) return `Tipo de triângulo Equilátero`
  if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3) return `Tipo de triângulo Isósceles`
  if(lado1 !== lado2 && lado2 !== lado3) return `Tipo de triângulo Escaleno`
}

console.log(tipoDeTriangulo(20,20,20))
console.log(tipoDeTriangulo(20,20,11))
console.log(tipoDeTriangulo(11,12,15))