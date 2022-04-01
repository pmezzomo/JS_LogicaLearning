const numeros = [1,2,3,4,5,6]



// for (let index = 0 ; index < numeros.length; index ++) {
//     console.log(numeros[index])
// }

//ForEach precisa receber uma funçao
//Ele executa a funçao a qty de vezes q tem de itens no array
// numeros.forEach(function() {
//     console.log("Dentro do ForEach")
// })

// //ou
// function paraCadaElemento(){
//     console.log("Dentro do ForEach")
// }

// numeros.forEach(paraCadaElemento)

//o el é cada elemento, pode ser colocado qlqr nome
//Primeiro é sempre o elemento e dps o indice
//array mostra o elemento completo
function paraCadaElemento1(el, indice, array){
    console.log(el, indice, array)
}

numeros.forEach(paraCadaElemento1)

//pode ser feito passando uma funçao dentro dos parametros
//pode ser passado o parametro q sera utilizando, por exemplo, el = elemento
//Mesmo q nao use a ordem que deve ser seguida é sempre elemento, indice e array (el, i, array). 
//Pode ser usado um  no lugar do q nao usa. Segundo exemplo
numeros.forEach(function(el){
    console.log(el)

})

numeros.forEach(function(_, i){
    console.log(i)

})

/*******************************************************************/
const numeros = [1,2,3,4,5,6]

//primeiro nro é a partir de qual indice e o segundo qtos elementos deverao ser excluidos
numeros.splice(1, 1)
console.log(numeros)

//remove o ultimo elemento do array
numeros.pop()
//aparece qual elemento foi removido
console.log(numeros.pop())
console.log(numeros)

/******************************************************************/
//metodos sao funcoes q estao dentro do objeto(array)
const numeros = [1,2,3,4,5]

numeros.push(6)
numeros[0] = 100    

//pertence ou nao ao array
console.log(numeros.includes(10))
console.log(numeros.includes(2))

//o concat  gera um novo array
const numeros2 = numeros.concat(7,8,9)


//juntas os elementos do array com um simbolo q foi adicionado, por exemplo, traço
console.log(numeros.join(' - '))
console.log(numeros)
console.log(numeros2)

//indexof qual o indice do elemento
console.log(numeros.indexOf(2))
