// ACCORDION

$(document).ready(function(){
    $(".collapse.in").each(function(){
        $(this).siblings('.panel-heading').find('.glyphicon').addClass('glyphicon-minus').removeClass('glyphicon-plus');
    });

    $(".collapse").on('show.bs.collapse', function(){
        $(this).parent().find('.glyphicon').removeClass('glyphicon-plus').addClass('glyphicon-minus');
        $(this).parent().find('.panel-heading').addClass('panel-active');

    }).on('hide.bs.collapse', function(){
        $(this).parent().find('.glyphicon').removeClass('glyphicon-minus').addClass('glyphicon-plus');
        $(this).parent().find('.panel-heading').removeClass('panel-active');
    });
});


// MAP STARTS
function initMap() {
    var uluru = {lat: 55.703297, lng: 21.144279};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
}
