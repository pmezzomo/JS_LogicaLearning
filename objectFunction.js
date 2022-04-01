//Funcao construtora = responsavel por construir um objeto 
//Parecido com as classes de java 

function Data(dia = 1, mes = 1 , ano = 2022) {
    // console.log(this)
    this.dia = dia
    this.mes = mes
    this.ano = ano

}

//Associa ao new para criar objetos
const d1 = new Data()
const d2 = new Data(3, 8, 2022)
console.log(typeof d1)

console.log(d1)
console.log(d2)
