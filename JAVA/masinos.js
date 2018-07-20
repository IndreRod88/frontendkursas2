let autos = [
    ['2017-07-06 19:59:41','ABC123',5000,200],
    ['2017-07-06 19:59:45','ABC456',1564,50],
    ['2017-07-06 19:59:45','ABC789',8432,123],
    ['2017-07-06 19:59:45','ABC159',4568,589],
    ['2017-07-06 19:59:45','ABC753',9852,150],
    ['2017-07-06 19:59:45','ABC147',1234,120],
    ['2017-07-06 19:59:45','ABC258',7894,130],
    ['2017-07-06 19:59:45','ABC369',3578,140],
    ['2017-07-06 19:59:46','ABC854',1598,150],
    null, undefined,
];

let new_autos;
let a;
let b;
let i=0;
myarr=[];
autos.forEach(function(auto) {
    if (auto !== null && auto !== undefined) {
        let string = '<tr>';
        auto.forEach(function(item) {
            string += '<td>' + item +'</td>';
        });
        new_autos = autos[i++];
        a=new_autos[2];
        b=new_autos[3];
        ats=(a/1000) / (b/3600);
        a=0;
        b=0;
        string += '<td>'+ Math.round(ats) +'</td>';
        string += '</tr>';
        document.getElementById('duomenys').innerHTML += string;
    }
});

function addTo() {
    let data_laikas = document.getElementById("data1").value;
    let numeris = document.getElementById("data2").value;
    let greitis = document.getElementById("data3").value;
    let atstumas = document.getElementById("data4").value;
    let table = document.getElementById("myTable");

    if ((data_laikas!=="") && (numeris!=="") && (greitis!=="") && (atstumas!=="")) {

    autos.push(data_laikas);
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let data_laikas_last=autos.length-1;
    cell1.innerHTML = autos[data_laikas_last];

    autos.push(numeris);
    let cell2 = row.insertCell(1);
    let numeris_last=autos.length-1;
    cell2.innerHTML = autos[numeris_last];

    autos.push(greitis);
    let cell3 = row.insertCell(2);
    let greitis_last=autos.length-1;
    cell3.innerHTML = autos[greitis_last];

    let cell4 = row.insertCell(3);
    cell4.innerHTML = atstumas;
    let cell5 = row.insertCell(4);
    let kmh=(greitis/1000) / (atstumas/3600);
    cell5.innerHTML = Math.round(kmh);
}
}



