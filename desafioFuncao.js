const nota1 = 1.8
const nota2 = 1.1
const nota3 = 2.7

// function calcularNotaAluno(nota) {
//     if(nota >= 7 && nota <= 10) {
//         return "Aluno Aprovado"
//     } else if(nota >= 5 && nota < 7){
//         return "Aluno em Recuperação"
//     } else if (nota >=0 && nota < 5) {
//         return "Aluno Reprovado"
//     } else {
//         return "Valor invalido"
//     }
// }

// console.log(calcularNotaAluno(1))

//Resoluçao usando varias funcoes
//Retornar o menor numero
function minimo(n1, n2) {
    return n1 <= n2 ? n1 : n2
    // if(n1 <= n2) {
    //     return n1
    // } else {
    //     return n2
    // }
}

// console.log(minimo(nota1, minimo(nota2,  nota3)))

function media(n1, n2, n3) {
    const menorNota = minimo(n1, minimo(n2, n3))

    if(menorNota === n1) {
        return(n2 + n3) /2
    } else if(menorNota === n2) {
        return(n1 + n3) /2
    } else {
        return (n1 + n2) /2 
    }
}

function mediaParaStatus(media) {
    if(media >= 7){
        return "Aluno Aprovado"
    } else if(media >=4){
        return "Aluno em Recuperação"
    } else {
        return "Reprovado"
    }
}

const mediaFinal = media(nota1, nota2, nota3)
const statusFinal = mediaParaStatus(mediaFinal)
console.log(statusFinal)
