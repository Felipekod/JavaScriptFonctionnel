
const nums = [1,2,3,4,5]

//funcao para o map passando apenas cada item
const dobro = (n) => n * 2

//funcao para o map passando item + indice
const dobroMaisIndice = (n, i) => n * 2 + i

//funcao para o map passando item + indice + array
const dobroMaisIndiceMaisTamanhoArray = (n, i, a) => n * 2 + i + a.length

console.log(nums.map(dobro))
console.log(nums.map(dobroMaisIndice))
console.log(nums.map(dobroMaisIndiceMaisTamanhoArray))

console.log('------------------------------------------------------------')


const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.50},
    {nome: 'Caderno', qtde: 4, preco: 27.99},
    {nome: 'Lapis', qtde: 3, preco: 2.99},
    {nome: 'Tesoura', qtde: 2, preco: 4.99}
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))