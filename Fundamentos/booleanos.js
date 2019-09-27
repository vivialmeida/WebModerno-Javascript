let isAtivo = false
console.log(`O valor da variavel é: ${isAtivo}`)

isAtivo = true
console.log(`O valor da variavel é: ${isAtivo}`)

isAtivo = 1
console.log(!!isAtivo)

console.log(!isAtivo)

console.log(`os verdadeiros ...
${!!3}
${!!-1}
${!!'texto'}
${!![]}
${!!{}}
${!! Infinity}
${!!(isAtivo = true)}
`)


console.log(`os falsos ...
${!!0}
${!!''}
${!!null}
${!!NaN}
${!!undefined}
${!!(isAtivo= false)}
`)
// retorna true por causa da "espaço"
console.log(`Para finalizar ...
${!!('' || null || 0 || ' ')}
`)

// diferença entre o primeiro é que esse retorna o primeiro valor true
console.log(('' || null || 0 || 'Vivi'))

let nome =''

// o primeiro valor é falso, por esse motivo retorna desconhecido
console.log(nome||'Desconhecido')
