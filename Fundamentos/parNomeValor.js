//par nome-valor

const saudacao = 'Opa' // contexto léxico

function exec(){
    const saudacao =  'Falaaa' // contexto lexico 2
    return saudacao
}

//const saudacao = 'Epa'  -- da erro por estar no mesmo contexto lexico 1



//Objetos sao grupos aninhados de pares nome-valor

const cliente = {
    nome: 'Pedro',
    idade: 32, 
    peso:90,
    endereco: {
        lorogadouro: 'Rua Primavera',
        numero: 14
    }  
}

console.log(saudacao)

console.log(exec())

console.log(cliente)