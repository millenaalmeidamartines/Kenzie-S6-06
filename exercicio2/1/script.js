let elevador = {
    andarAtual: 0,
    totalDeAndares: 10,
    capacidadeDoElevador: 8,
    ocupacaoAtual: 2,
    
    entrar: function() {
        if (this.ocupacaoAtual < this.capacidadeDoElevador) {
            this.ocupacaoAtual++;
            return `Ocupação atual em: ${this.ocupacaoAtual}`;
        } else {
            return `Elevador lotado`;
        }
    }
}


console.log(elevador.entrar());
console.log(elevador.entrar());
console.log(elevador.entrar());
console.log(elevador.entrar());
console.log(elevador.entrar());
console.log(elevador.entrar());
console.log(elevador.entrar());