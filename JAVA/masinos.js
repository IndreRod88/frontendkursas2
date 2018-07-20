var autos = [
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

var new_autos;
var a;
var b;
var i=0;
myarr=[];
autos.forEach(function(auto) {
    if (auto !== null && auto !== undefined) {
        var string = '<tr>';
        auto.forEach(function(item) {
            string += '<td>' + item +'</td>';
        });
        new_autos = autos[i++];
        a=new_autos[2];
        b=new_autos[3];
        ats=(a/1000) / (b/3600);
        a=0;
        b=0;
        atsak=Math.round(ats);
        string += '<td>'+ atsak +'</td>';
        string += '</tr>';
        document.getElementById('duomenys').innerHTML += string;
    }
});
myarr=[];
function addTo() {
    let data1 = document.getElementById("data1").value;
    let numeris = document.getElementById("data2").value;
    let greitis = document.getElementById("data3").value;
    let atstumas = document.getElementById("data4").value;
    let table = document.getElementById("myTable");
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = data1;
    cell2.innerHTML = numeris;
    cell3.innerHTML = greitis;
    cell4.innerHTML = atstumas;
    cell5.innerHTML = "0";
}

    myarr.push(document.getElementById("data1").value);
    document.getElementById('duom1').innerHTML = myarr;

    myarr.push(document.getElementById("data2").value);
    document.getElementById('duom2').innerHTML = myarr;

    myarr.push(document.getElementById("data3").value);
    document.getElementById('duom3').innerHTML = myarr;

    myarr.push(document.getElementById("data4").value);
    document.getElementById('duom4').innerHTML = myarr;


