let autos = [
    ['2017-07-06 19:59:41', 'ABC123', 5000, 200],
    ['2017-07-06 19:59:45', 'ABC456', 1564, 50],
    ['2017-07-06 19:59:45', 'ABC789', 8432, 123],
    ['2017-07-06 19:59:45', 'ABC159', 4568, 589],
    ['2017-07-06 19:59:45', 'ABC753', 9852, 150],
    ['2017-07-06 19:59:45', 'ABC147', 1234, 120],
    ['2017-07-06 19:59:45', 'ABC258', 7894, 130],
    ['2017-07-06 19:59:45', 'ABC369', 3578, 140],
    ['2017-07-06 19:59:46', 'ABC854', 1598, 150],
];

var masyvas = [];
let new_autos;
let a;
let b;
let i = 0;
myarr = [];
autos.forEach(function (auto) {
    if (auto !== null && auto !== undefined) {
        let string = '<tr>';
        auto.forEach(function (item) {
            string += '<td>' + item + '</td>';
        });
        new_autos = autos[i++];
        a = new_autos[2];
        b = new_autos[3];
        ats = (a / 1000) / (b / 3600);
        a = 0;
        b = 0;
        string += '<td>' + Math.round(ats) + '</td>';
        string += '</tr>';
        document.getElementById('duomenys').innerHTML += string;
    }
});


let arrow = [];

function addTo () {

    arrow.push({
        dateTime: document.getElementById("data1").value,
        number: document.getElementById("data2").value,
        distance: document.getElementById("data3").value,
        time: document.getElementById("data4").value,
    });


    document.getElementById("myform").reset();

    let elm = document.getElementById("duomenys");
    elm.innerHTML = "";

    arrow.forEach(function (obj) {
        let calc = (obj.distance / 1000) / (obj.time / 3600);
        elm.innerHTML += '<tr>\n\
    <td>' + obj.dateTime + '</td>\n\
    <td>' + obj.number + '</td>\n\
    <td>' + obj.distance + '</td>\n\
    <td>' + obj.time + '</td>\n\
    <td>' + Math.round(calc) + '</td>\n\
    </tr>';
    });
}