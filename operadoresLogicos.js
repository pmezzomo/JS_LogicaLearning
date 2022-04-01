let temDinheiro = true
let estaEnsolarado = false
let carroEstaNaGaragem = false

let resultadoE = "Vai para o shopping? "
resultadoE += temDinheiro && estaEnsolarado

console.log(resultadoE)

let resultadoOU = "Vai para o shopping (ou)? "
resultadoOU += estaEnsolarado || carroEstaNaGaragem
console.log(resultadoOU)

console.log(true ^ true)
//usa o != ou !== para xor
console.log(true !== false)

//! para negação
console.log(!true)

const t1 = true
const t2 = true
console.log("Vamos comprar a TV 50 ?" + (t1 && t2)) //AND
console.log("Vamos comprar a TV 50 ?" , t1 !== t2, "!!") //XOR

let sorvete = t1 || t2
console.log("Vamos comprar sorvete? ", sorvete) //OR

let ficarEmCasa = !sorvete//NOT
console.log("Vamos ficar em casa? ", ficarEmCasa)
