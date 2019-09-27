function getInteitoAleatorioEntre(min, max){
    const valor = Math.random()* (max - min) + min
    return Math.floor(valor)
}

opcao =-1

do {
    opcao = getInteitoAleatorioEntre(-1,10)
    console.log(`O numero interio gerado foi: ${opcao}.`)

}while (opcao != -1)

