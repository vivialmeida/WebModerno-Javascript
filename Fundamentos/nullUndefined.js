let valor // nao incializado

console.log(valor)
//null é ausencia de valor
valor = null
console.log(valor)

// console.log(valor.toString()) #erro
const produto = {} // objeto vazio

console.log(produto.preco) 

produto.preco =3.5
console.log(produto)
produto.preco = undefined // evitar atribuir undefined para uma variavel
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preco

console.log(!!produto.preco)

console.log(produto)


