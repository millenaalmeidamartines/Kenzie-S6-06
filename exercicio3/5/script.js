let televisao = {
    // canalAtual: 95,
    canalAtual: 5,
    volume: 7,

    consultarCanal: function() {
        return this.canalAtual;
    },

    consultarVolume: function() {
        return this.volume;
    }
};

console.log(televisao.consultarCanal());
console.log(televisao.consultarVolume());