function dateFunction() {
    let date = new Date();
    let y = date.getFullYear();
    let m = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + (date.getDate())).slice(-2);
    let h = ("0" + (date.getHours())).slice(-2);
    let min = ("0" + (date.getMinutes() + 1)).slice(-2);
    let s = ("0" + (date.getSeconds() + 1)).slice(-2);
    return y + '-' + m + '-' + day + ' ' + h + ':' + min + ':' + s;
}

let rowid = 0;
function confirm() {
    let list = {
        rowid: rowid++,
        auto: document.getElementById("auto").value,
        greitis: document.getElementById("greitis").value,
        laikas: document.getElementById("laikas").value
    };

    array=[];

    let table = document.getElementById("myTable");
    if ((list.auto !== "") && (list.greitis !== "") && (list.laikas !== "")) {
        let row = table.insertRow(-1);

        let cell1 = row.insertCell(0);
        cell1.innerHTML = rowid + " / " +dateFunction();

        let cell2 = row.insertCell(1);
        cell2.innerHTML = list.auto;

        let cell3 = row.insertCell(2);
        cell3.innerHTML = list.greitis;

        let cell4 = row.insertCell(3);
        cell4.innerHTML = list.laikas;

        let cell5 = row.insertCell(4);
        let kmh = (list.greitis / 1000) / (list.laikas / 3600);
        cell5.innerHTML = Math.round(kmh);


        let cell6 = row.insertCell(5);
        let button = document.createElement("button");

        let t = document.createTextNode("Taisyti");
        button.appendChild(t);
        button.className = "btn-primary btn-xs";


        button.setAttribute("type", "button");
        cell6.appendChild(button);
        $( "button" ).click(function() {

            button.setAttribute("data-toggle", "modal");
            button.setAttribute("data-target", "#taisyti");

            document.getElementById("auto-up").value =  list.auto;
            document.getElementById("greitis-up").value = list.greitis;
            document.getElementById("laikas-up").value = list.laikas;
        });






        let cell7 = row.insertCell(6);
        let button_remov = document.createElement("button");
        let t_remov = document.createTextNode("Naikinti");
        button_remov.appendChild(t_remov);
        button_remov.className = "btn-danger btn-xs";
        button_remov.setAttribute("type", "button");
        button_remov.setAttribute("data-toggle", "modal");
        button_remov.setAttribute("data-target", "#remove");
        cell7.appendChild(button_remov);
    }
}

function getvalue() {
document.getElementById("auto-up").value = "labas";
    // this.document.getElementById("auto").value = nr;
    // this.document.getElementById("greitis").value = s;
    // this.document.getElementById("laikas").value = t;
}