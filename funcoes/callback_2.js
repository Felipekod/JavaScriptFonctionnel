const fs = require('fs')
const path = require('path')

//caminho atual
console.log(__dirname + "  teste")

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(err, conteudo){
    console.log(conteudo.toString())
}

//readFile passando como param o caminho, opçoes e callback
fs.readFile(caminho, {}, exibirConteudo)