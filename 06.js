// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.
// Aprimeira função retornará o montante da aplicação financeira sob o regime de juros simples 
// e a segunda retornará o valor da aplicação sob o regime de juros compostos

function jurosSimples(capInicial, taxaDeJuros, tempoAplicacao) {
  const juros = capInicial * taxaDeJuros * tempoAplicacao
  return capInicial + juros
}

console.log(jurosSimples(500, 0.3, 5)) // capInicial = R$ 500,00 - taxaDeJuros: 30% - tempo: 5 meses

function jurosCompostos(capInicial, taxaDeJuros, tempoAplicacao) {
  return capInicial * ((1 + taxaDeJuros) ** tempoAplicacao)
}

console.log(jurosCompostos(500, 0.1, 12).toFixed(2)) // capInicial = R$ 500,00 - taxaDeJuros: 10% - tempo: 12 meses
console.log(jurosCompostos(7000, 0.015, 12).toFixed(2)) // capInicial = R$ 7000,00 - taxaDeJuros: 1,5% - tempo: 12 meses
