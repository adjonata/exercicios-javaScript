// O cardápio de uma lanchonete é o seguinte:
// Código - Descrição do Produto - Preço
// 100 - Cachorro Quente - R$ 3,00
// 200 - Hambúrguer Simples - R$ 4,00
// 300 - Cheese burguer - R$ 5,50
// 400 - Bauru - R$ 7,50
// 500 - Refrigerante - R$ 3,50
// 600 - Suco - R$ 2,80
// Implemente uma  função que receba como parâmetros o código do item pedido, 
// a quantidade e calcule o valora ser pago por aquele lanche. 
// Considere que a cada execução somente será calculado um item. Use ocomando switch. Crie um caso default para produto não existente.

function comprar(codItem, quantidade) {
  const calcular = (val, quant) => `R$ ${(val * quant).toFixed(2)}`
  const items = {
    100: { nome: 'Cachorro Quente', valor: 3 },
    200: { nome: 'Hambúrguer Simples', valor: 4 },
    300: { nome: 'Cheese burguer', valor: 5.5 },
    400: { nome: 'Bauru', valor: 7.5 },
    500: { nome: 'Suco', valor: 2.8 },
  }

  switch (codItem) {
    case 100: case 200: case 300: case 400: case 500:
      const { nome, valor } = items[codItem]
      console.log(`Cod. ${codItem} - ${quantidade} x ${nome} - ${calcular(valor, quantidade)}`)
    break
    
    default:
      console.log('Produto não existe!')
  }
}

comprar(100, 3)
comprar(200, 1)
comprar(300, 4)
comprar(400, 5)
comprar(500, 3)
comprar(800, 3)