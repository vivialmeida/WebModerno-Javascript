function tratarErroELancar(erro){
   // throw new Error(' ...')
   //throw 10
  // throw true
  // throw  'mensagem'
   throw {
       nome: erro.name,
       msg: erro.menssage,
       date:new Date
        
   }
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase( + '!!!'))

    } catch (e){
        tratarErroELancar(e)

    } finally {
        console.log('final')
    }
}

const obj = {name: 'Renato'}

imprimirNomeGritado(obj)
