let pessoa = {
    nome: "Abigail",
    anoDeNascimento: "2020",
    cidade: "Minas Gerais"
}

function criarPessoa(nome, anoDeNascimento, cidade) {
    return {
        nome: nome,
        anoDeNascimento: anoDeNascimento,
        cidade: cidade
    };
}

const pessoa1 = criarPessoa("Nicolas", 1990, "Rio de Janeiro");
console.log(pessoa1);

const pessoa2 = criarPessoa("Joan", 1985, "São Paulo");
console.log(pessoa2);