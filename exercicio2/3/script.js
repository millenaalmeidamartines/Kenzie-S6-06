let elevador = {
    andarAtual: 0,
    totalDeAndares: 10,
    capacidadeDoElevador: 8,
    ocupacaoAtual: 2,
    
    subir: function() {
        if (this.andarAtual === this.totalDeAndares) {
            return `O elevador já se encontra no último andar`;
        } else {
            this.andarAtual++;
            return `Estamos no andar: ${this.andarAtual}`;
        }
    }
};

console.log(elevador.subir());
console.log(elevador.subir());
console.log(elevador.subir());
console.log(elevador.subir());
console.log(elevador.subir());
console.log(elevador.subir());
console.log(elevador.subir());
console.log(elevador.subir());
console.log(elevador.subir());
console.log(elevador.subir());
console.log(elevador.subir());
console.log(elevador.subir());