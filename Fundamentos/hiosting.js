// içamento ==hoisting
console.log('a=', a)
var a = 2
console.log('a=', a)

// o mesmo efeito dentro da função
function teste(){
    console.log('a=', a)
    var a = 2
    console.log('a=', a)
}

teste()