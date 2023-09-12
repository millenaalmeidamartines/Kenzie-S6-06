let televisao = {
    canalAtual: 5,
    volume: 7,

    aumentarVolume: function() {
        if (this.volume === 9) {
            return `Volume no máximo`;
        } 
        this.volume++;
        return `Volume está em: ${this.volume}`;
    }
};

console.log(televisao.aumentarVolume());
console.log(televisao.aumentarVolume());
console.log(televisao.aumentarVolume());
console.log(televisao.aumentarVolume());