function teste1(num){
   if(num > 7)
    console.log(num)
    console.log('Final') // sempre é executada, nao esta associada ao if 
}

teste1(6)
teste1(8)

function teste2(num){
    if(num > 7); { // sentença de codigo vazia terminada com ';'
        console.log(num)
    }
}
