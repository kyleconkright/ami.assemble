$(document).ready(function() {
    console.log('jQuery Success');


    $('#masthead').slick({
        autoplay: true,
        dots: true,
        pauseOnDotsHover: true,
        arrows: false,
        swipe: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                swipe: true,
                dots: false
            }
        }]
    });



    // $.ajax({
    //     url: "./data/data.json",
    //     type: 'GET',
    //     dataType: 'JSON',
    //     success: function(results) {
    //     console.log('Ajax Success')
    //
    //         $('#masthead').slick({
    //             autoplay: true,
    //             dots: true,
    //             pauseOnDotsHover: true,
    //             arrows: false,
    //             swipe: false,
    //             responsive: [{
    //                 breakpoint: 1024,
    //                 settings: {
    //                     swipe: true,
    //                     dots: false
    //                 }
    //             }]
    //         });
    //     }
    // });


});
