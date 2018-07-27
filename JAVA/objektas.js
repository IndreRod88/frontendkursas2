// var objektas = {
//     vardas: 'Mindaugas',
//     pavarde: 'Rimkus';
//     turis: function (plotis) {
//         return this.plotis * this.plotis * this.plotis;
//
//     }
// };
//
// objektas.turis();
//
//
// objektas.city = 'Klaipeda';  //prides i objektas city Klaipeda
//
//
//

let turis = {
    ilgis: 55,
    plotis: 100,
    aukstis: 33,
    turisaps: function (ilgis, plotis, aukstis) {
        return this.ilgis * this.plotis * this.aukstis;
    }
};

console.log(turis.turisaps());