$(function() {
    var url = 'https://postit.lt/data/?address=Agluonos%20gatv%C4%97%202,%20Klaip%C4%97da';
    $.get(url,function(data) {
        console.log(data);
    });
});