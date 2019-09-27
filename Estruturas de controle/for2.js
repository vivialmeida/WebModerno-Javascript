const notas =[10,8,9,6,7]

for (i in notas){
    console.log(`[${i}] ${notas[i]}`)
}

const pessoa = {
    nome: 'Ana',
    idade: 28,
    cpf: '655645151651',
    peso: 86
}
for (let atributo in pessoa ){
    console.log(atributo, pessoa[atributo])
}