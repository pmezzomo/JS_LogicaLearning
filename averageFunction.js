const nota1 = 5.8
const nota2 = 5.1
const nota3 = 5.7

function calculaMedia(n1, n2, n3) {
    let media  = (n1+n2+n3)/7
    if(media >= 7) {
        return "Aprovado"
    } else if(media >=5 && media < 7) {
        return "Recuperação"
    } else if (media >=0 && media < 5){
        return "Reprovado"
    } else {
        return "Valor invalido"
    }
}

console.log(calculaMedia(nota1, nota2,nota3))
