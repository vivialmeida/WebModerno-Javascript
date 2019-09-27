let a =3

global.b =123
this.c = 456  // exporta para fora do arquivo. // cada arquivo é um modulo

console.log(this.a)

console.log(a)
console.log(global.b)
console.log(this.c)
this.d = false
this.e = 'teste'

console.log(module.exports.c)
console.log(module.exports === this )
console.log(module.exports)

// criando uma variavel maluca: sem var ou let
abc = 3 // nao faca isso
console.log(globaç.abc)

module.exports  = {e : 456, f: false, g: 'teste'  }