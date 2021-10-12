function executarQualquerCoisa(fn){
    fn()
}

const numero3 = () => {
    console.log("3")
}

executarQualquerCoisa(numero3)
console.log('--------------------------')

//retornar funcao a partir de outra funcao
function potencia(base){
    return function(exp){
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))
console.log(potencia(2)(8))

console.log('--------------------------')
