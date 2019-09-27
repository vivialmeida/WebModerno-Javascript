// var: escopo glogal e escopo de funcao
var numero = 1
{
    // let escopo global, funao e bloco
    let numero = 2
    console.log('dentro =', numero)
}

console.log('fora =', numero)