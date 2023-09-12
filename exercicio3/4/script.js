let televisao = {
    // canalAtual: 95,
    canalAtual: 5,
    volume: 7,

    mudarCanalParaCima: function() {
        if (this.canalAtual === 99) {
            return `Este é o último canal`;
        } 
        this.canalAtual++;
        return `O canal atual é: ${this.canalAtual}`;
    },

    mudarCanalParaBaixo: function() {
        if (this.canalAtual === 1) {
            return `Este é o primeiro canal`;
        }
        this.canalAtual--;
        return `O canal atual é: ${this.canalAtual}`;
    }
};

console.log(televisao.mudarCanalParaBaixo());
console.log(televisao.mudarCanalParaBaixo());
console.log(televisao.mudarCanalParaBaixo());
console.log(televisao.mudarCanalParaBaixo());
console.log(televisao.mudarCanalParaBaixo());
console.log(televisao.mudarCanalParaBaixo());