let televisao = {
    canalAtual: 5,
    volume: 7,

    aumentarVolume: function() {
        if (this.volume === 9) {
            return `Volume no máximo`;
        } 
        this.volume++;
        return `Volume está em: ${this.volume}`;
    },

    diminuirVolume: function() {
        if (this.volume === 1) {
            return `Volume no mínimo`;
        }
        this.volume--;
        return `Volume está em: ${this.volume}`;
    }
};

console.log(televisao.diminuirVolume());
console.log(televisao.diminuirVolume());
console.log(televisao.diminuirVolume());
console.log(televisao.diminuirVolume());
console.log(televisao.diminuirVolume());
console.log(televisao.diminuirVolume());
console.log(televisao.diminuirVolume());
console.log(televisao.diminuirVolume());