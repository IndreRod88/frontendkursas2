function Test(text) {    //funkcija veikia tik kai ja iskvieciam
    var km= 1000;
}
Test('labas');

return km;

//RESULT labas


function Test(m,s) {
    console.log(arguments) <--
}
Test(5000,200);



//RESULT labas


// FUNCTION

function greitis (m,s) {
    kmh = m/1000;
    sk = s/3600;
    ats=kmh / sk;
    return ats;
}
greitis (5000,200);
console.log (ats);
// <-- paskaiciuojame km/h