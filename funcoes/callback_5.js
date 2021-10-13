const { runInThisContext } = require("vm")

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.99},
    {nome: 'Lapis', qtde: 3, preco: 2.99},
    {nome: 'Tesoura', qtde: 2, preco: 4.99}
]

const somar = (acc, el) => acc + el
const getTotal = item => item.qtde * item.preco

const totalGeral =  carrinho.map(getTotal).reduce(somar, 0)
console.log(totalGeral)

Array.prototype.meuReduce = function (fn, inicial){
    let acc = inicial
    for(let i = 0; i < this.length ; i++){
        if(!acc && i === 0){
            acc = this[i]
            continue
        }

        fn(acc, this[i], i , this)
    }

    return acc
}