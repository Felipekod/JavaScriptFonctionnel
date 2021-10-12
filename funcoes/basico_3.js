//arrow function
const felizNatal = () => console.log('Feliz natal')
felizNatal()

const saudacao = (nome) => "Ola " + nome + "!!!!"
console.log(saudacao('Felipe'))

const somar = array => {
    let soma = 0
    for(let n of array){
        soma += n
    }
    return soma
}

console.log(somar([2,3,3,2]))