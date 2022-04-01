// let linha = ''

// for(let i = 1; i <= 6; i++) {
//     linha += '#'
//     console.log(linha)
// }

//Resolvendo o desafio sem nro
for(let s = '#'; s != '#######'; s+= '#') {
    console.log(s)

}

/*********For and ARRAY******************/
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let valores = ' '
// for(let elementos of numeros) {
//     valores -= elementos + ' '
// }
// console.log(valores)

//-2 para pegar o penultimo elemento
//igual a zero pq é de tras p frente
for(let i = numeros.length -2 ; i >= 0; i -= 2){
    console.log(numeros[i])
}

