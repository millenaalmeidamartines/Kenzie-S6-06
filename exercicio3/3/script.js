let televisao = {
    canalAtual: 95,
    volume: 7,

    mudarCanalParaCima: function() {
        if (this.canalAtual === 99) {
            return `Este é o último canal`;
        } 
        this.canalAtual++;
        return `O canal atual é: ${this.canalAtual}`;
    }
};

console.log(televisao.mudarCanalParaCima());
console.log(televisao.mudarCanalParaCima());
console.log(televisao.mudarCanalParaCima());
console.log(televisao.mudarCanalParaCima());
console.log(televisao.mudarCanalParaCima());
console.log(televisao.mudarCanalParaCima());