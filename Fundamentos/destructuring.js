// recurso introduzido ES22015

const pessoa = {
    nome: 'Ana',
    idade: 5, 
    endereco:{
        logadouro: "Rua ABC",
        numero: 1000
    }
}

const {nome, idade} = pessoa // tira esses atributos de dentro do objeto

console.log(nome, idade)

const {nome: n, idade: i } = pessoa // cria a variavel

console.log(n, i)

const{ sobrenome, bemHumorada = true } = pessoa

console.log(sobrenome, bemHumorada)

const {endereco:{logadouro, numero, cep}} = pessoa

console.log(logadouro, numero, cep)