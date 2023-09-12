let elevador = {
    andarAtual: 3,
    totalDeAndares: 10,
    capacidadeDoElevador: 8,
    ocupacaoAtual: 2,

    descer: function() {
        if (this.andarAtual === 0) {
            return `O elevador já se encontra no térreo`;
        } else {
            this.andarAtual--;
            return `Estamos no andar: ${this.andarAtual}`;
        }
    }
};

console.log(elevador.descer());
console.log(elevador.descer());
console.log(elevador.descer());
console.log(elevador.descer());
console.log(elevador.descer());