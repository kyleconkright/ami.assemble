$(document).ready(function() {


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


    $(".button").on('click', function(e) {

        var name = $("input#name").val();
        if (name == "") {
            $("input#name").focus();
            return false;
        }
        var email = $("input#email").val();
        if (email == "") {
            $("input#email").focus();
            return false;
        }
        var phone = $("input#phone").val();
        if (phone == "") {
            $("input#phone").focus();
            return false;
        }
        var dataString = $('form[name="contact"]').serialize();
        // alert (dataString);return false;
        $.ajax({
            type: "POST",
            url: "../contact/mail.php",
            data: dataString,
            success: function() {
                $('#contact_form').html("<div id='message'></div>");
                $('#message').html("<h2>Contact Form Submitted!</h2>")
                .append("<p>We will be in touch soon.</p>")
                .hide()
                .fadeIn(1500, function() {
                    $('#message').append("<img id='checkmark' src='images/check.png' />");
                });
            }
        });
        e.preventDefault();
    });



});
