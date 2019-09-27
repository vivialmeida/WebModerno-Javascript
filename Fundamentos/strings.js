const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5)) // retorna vazio
console.log(escola.charCodeAt(3)) // valor na tabela unicode (3)
console.log(escola.indexOf('o')) 

console.log(escola.substring(1)) //  imprimme a partir do indice 1
console.log(escola.substring(0,3)) // do indice 0 ao 3 sem incluir o 3

console.log("Escola ".concat(escola).concat ("!"))
console.log("Escola " + escola + "!" )
console.log(escola.replace(3, "e"))
console.log(escola.replace(/\d/, "e")) // expressão regular (substitui digitos por letra E)
console.log(escola.replace(/\w/g, "e")) // expressão regular (substitui as todas a letras e digitos para letra E)

console.log("Ana, Maria,Pedro".split(",")) // gera array


