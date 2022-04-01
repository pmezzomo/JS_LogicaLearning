const data = {
    dia: 8,
    mes: 3,
    ano: 2022
}

//define um novo valor
data.dia = 27

console.log(data.dia)
console.log(`${data.dia}-${data.mes}-${data.ano}`)

const nascimento = {
    dia: 8,
    mes: 3,
    ano: 2022,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(nascimento.exibir())

//Qdo vc precisa de dados q se repetem, por exemplo, se precisava exibir a data mais de 1 vez pode-se
//criar uma funçao
//Funcao cria um novo objeto
function criarData(dia, mes, ano) {
    return {
        //chave(key): pode colocar qlqr nome e valor(parametro) precisa ser os mesmos q foram colcoados no parametro:
        dia: dia,
        mes: mes,
        ano: ano,
        exibir: function() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

const data2 = criarData(8, 3, 2022)

//Modelo simplificado
function criarData(dia, mes, ano) {
    return {
        dia,
        mes,
        ano,
        exibir () {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

const data1 = criarData(8, 3, 2022)
