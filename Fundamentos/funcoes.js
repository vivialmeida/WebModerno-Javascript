//Função sem retorno

function imprimirSoma(a,b){
     console.log(a + b)
}

imprimirSoma(3,2)

// soma valor inteiro com undefined = resulta em um NaN
imprimirSoma(2)

//soma os dois primeiros e ignora o restante 
imprimirSoma(3,10,1,18)

//Funcao com retorno

function soma(a, b = 1) { 
    return (a + b)
}

console.log(soma(8,3))

//soma com o valor padrao de b
console.log(soma(2))