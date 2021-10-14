
let p = new Promise(function(resolve){
    resolve(['ana','bia', 'carlos', 'daniel'])
})

function primeiraLetra(string){
    return string[0]
}

 p.then(valor => valor[0])
    .then(primeiraLetra)
    .then(letra => console.log(letra))
    