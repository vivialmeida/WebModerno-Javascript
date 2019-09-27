const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
// valores que não existe retorna underfine 
console.log(valores[4])

valores[15]= 10

console.log(valores)
//tamanho do array
console.log(valores.length)

// adicionando objetos no array
valores.push({id:3}, false, null, 'teste')
console.log(valores)

// retira o ultimo valor do array
console.log(valores.pop())
// deletando valores do array
delete valores[0]
console.log(valores)

// arrays sao do tipo Object
console.log(typeof valores)