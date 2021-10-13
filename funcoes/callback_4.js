const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.99},
    {nome: 'Lapis', qtde: 3, preco: 2.99},
    {nome: 'Tesoura', qtde: 2, preco: 4.99}
]

const qtMaiorQueZero = item => item.qtde > 0

const itensValidos = carrinho.filter(qtMaiorQueZero)

console.log(itensValidos)