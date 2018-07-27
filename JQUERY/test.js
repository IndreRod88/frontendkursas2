$(function () {
    $('#click')
        .val('Nespausk')
        .click(function (e) {
            // e.preventDefault();
            // e.stopPropagation();
            var div = $("<div>");
            div.text("Hello");
            $('body').append(div);
        });
    $(document).on('click', "#paspausk", function () {
        alert("Paspaude");
    });
});


// $("#clickme")
//     .val('Nespausk')
//     .click(function () {
//         alert('Clicked');
//     });
// //pakeicia value reiksme

//
// $(function () {
//
//     $("#testas").html('<h1>Labas</h1>');
//     $("#clickme").click(function () {
//         $("#testas").animate( {
//                 height:250,
//                 width: 250
//             }, 500,function (){
//                 alert('Pasibaige');
//             }
//         );
//     })
// });
