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


function apresentarPessoa(pessoa) {
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - pessoa.anoDeNascimento;
    
    return `${pessoa.nome} possui ${idade} anos de idade e atualmente está morando em ${pessoa.cidade}`;
}

const pessoa1 = criarPessoa("Nicolas", 1990, "Rio de Janeiro");
console.log(apresentarPessoa(pessoa1));

const pessoa2 = criarPessoa("Joan", 1985, "São Paulo");
console.log(apresentarPessoa(pessoa2));

console.log(apresentarPessoa(pessoa));