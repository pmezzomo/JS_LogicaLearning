const notas = [7, 8, 9, 3, 5, 10, 1, 2]

//foreach
//let dou o nome q quero no segundo é o nome do array
for(let nota of notas) {
    console.log(nota)
}

//percorrer os indices

let valores = ''
for(let nota of notas) {
    valores += nota + ' '
}

console.log(valores)

//Para pegar o indice do array, nesse caso usa in e nao of
//da um nome p variavel e dps o nome do array

let indices = ' '
for(let indice in notas) {
    indices += indice + ' '
}
console.log(indices)
