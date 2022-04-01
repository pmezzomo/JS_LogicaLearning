const produto = {
    nome: "Caneta",
    preco: 9.99,
    desconto: 0.2
}

console.log(produto['nome'])
console.log(produto['preco'])
console.log(produto['desconto'])
console.log(produto.nome)
console.log(produto.preco)
console.log(produto.desconto)
console.log(typeof produto)

/************************/
const clientes = {
    codigo: 1234,
    nome: "Ana",
    vip: true,
    endereco: {
        logradouro: "Rua ABC",
        numero: 123,
        complemento: "Apto 500",
        pontosRef: [
            "Hospital X",
            "Shopping"
        ]
    },
    nomeFilhos: ['Bia', 'Carlos', 'Gabriel']
}

console.log(clientes['endereco']['logradouro'])
console.log(clientes.endereco.logradouro)
//Acessa pelo indice pq tem um array no pontosRef
console.log(clientes.endereco.pontosRef[1])

/********************************Object Dinamic*********************/
const usuario = {
    email: 'aluno@hotmail.com'
}

console.log(usuario)
//Posso adicionar um atributo
usuario.nome = "Aluno"

console.log(usuario)
console.log(usuario.email)
console.log(usuario.nome)
