const hora= 19
let saudacao

// if(hora < 12) {
//     saudacao = "Bom dia!"
// } else {
//     saudacao = "Boa tarde!"
// }
if (hora < 12) {
    saudacao = "Bom dia!!"
} else {
    if(hora < 18) {
        saudacao = "Boa tarde!"
    } else {
        saudacao = "Boa noite!"
    }
}

console.log(saudacao)

/***********************************************/
nota = 10

if(nota >=9 && nota == 10) {
    console.log("A")
}

