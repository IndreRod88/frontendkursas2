function Zmogus(v, p, gm) {
    this.vardas = v;
    this.pavarde = p;
    this.gimimo_metai = gm;
    this.kiek = function () {
        return new Date().getFullYear() - this.gimimo_metai;
    }
}

let asmuo = new Zmogus('Indre', 'Rodiniene', 1988);

let amzius = new Date().getFullYear() - asmuo.gimimo_metai;

Zmogus.prototype.info = "As esu " + asmuo.vardas + " " + asmuo.pavarde + " " + "ir man yra " + amzius + " metu.";
console.log(Zmogus.prototype.info);
