const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99, fragile: true},
    {nome: 'Impressora', qtde: 1, preco: 649.50, fragile: true},
    {nome: 'Caderno', qtde: 4, preco: 27.99, fragile: false},
    {nome: 'Lapis', qtde: 3, preco: 2.99, fragile: true},
    {nome: 'Tesoura', qtde: 2, preco: 4.9, fragile: false}
]


//fragil true
//total de cada elemento
// media

const getMedia = (acc, el)=> { 
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return {
      qtde: novaQtde,
      total: novoTotal,
      media: novoTotal/novaQtde
    }
}
const mediaInicial = {qtde: 0, total: 0, media: 0}

const media = carrinho.filter(item => item.fragile)
                      .map(item => item.qtde * item.preco)
                      .reduce(getMedia, mediaInicial ).media

console.log(`A media é ${media}`)