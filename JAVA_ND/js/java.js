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


function confirm() {
    let list = {
        auto: document.getElementById("auto").value, greitis: document.getElementById("greitis").value,
        laikas: document.getElementById("laikas").value
    };

    let table = document.getElementById("myTable");
    if ((list.auto !== "") && (list.greitis !== "") && (list.laikas !== "")) {
        let row = table.insertRow(-1);

        let cell1 = row.insertCell(0);
        cell1.innerHTML = dateFunction();

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
        cell6.appendChild(button);

        button.addEventListener ("click", function() {
            alert("did something");
        });

        let cell7 = row.insertCell(6);
        let button_remov = document.createElement("button");
        let t_remov = document.createTextNode("Naikinti");
        button_remov.appendChild(t_remov);
        cell7.appendChild(button_remov);

        button_remov.addEventListener ("click", function(no) {
            document.getSelection(row).contentEditable = true;
        });

    }
}