// Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
// como parâmetros um número n (número de termo),
// ​a1​ (o primeiro termo) e ​r​ (a razão) e escreva os ​n​ termos ,bem como a soma dos elementos.

function progAritmetica(n, a1, r) {
  const pa = a1 + (n - 1) * r

  console.log(`O ${n}° termo de uma P.A é ${pa}`)
}

function progGeometrica(n, a1, r) {
  const pg = a1 * (r ** (n-1))

  console.log(`O ${n}° termo de uma P.G é ${pg}`)
}

progAritmetica(16, -10, 3)
progGeometrica(7, 1, 3)