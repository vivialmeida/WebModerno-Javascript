function area(largura, altura){
const area = largura* altura
    if (area> 20 ){
        console.log(`Valor acima do permitido ${area}m2.`)
    }else {
        return area
    }
}

console.log(area(2,3))
console.log(area(2))
console.log(area(3,5,8))
console.log(area(5,6))