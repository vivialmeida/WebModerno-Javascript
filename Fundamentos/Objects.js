//JSON(NOTAÇÃO DE OBJETO EM JAVASCRIT) = formato textual 
// OBJECT = NOTAÇÃO LITERAL = coleção de chave valor

const prod1 ={}
prod1.nome = 'Celular Ultra Mega'
prod1.preco =4988.90

console.log(prod1)

prod1['Desconto Legal'] = 0.40 // evitar atributos com espaco


prod2 = {
    nome: 'Camisa polo', 
    preco: 69.90, 
    obj: {
        cor: 'amarelo',
        tamanho: 'M',
        obj: {
         cor:'azul'

        }

    }

}

console.log(prod2)
// JASON
 '{"nome: "Camisa Polo , "preço": 69.90"}'