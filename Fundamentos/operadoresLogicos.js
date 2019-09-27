
function compras(trabalho1, trabalho2){
const comprarSorvete = trabalho1 || trabalho2
const comprarTV50 = trabalho1 && trabalho2
//const comprarTV32 =  !!(trabalho1 ^ trabalho2) bitwise xor 
const comprarTV32 = trabalho1  != trabalho2
const mantertSaudavel = !comprarSorvete
return { comprarSorvete, comprarTV50, comprarTV32, mantertSaudavel}
}
console.log(compras(true, false))
console.log(compras(true, true))
console.log(compras(false, false))
console.log(compras(false, true))