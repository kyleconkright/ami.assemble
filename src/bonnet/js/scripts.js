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

    var modal = $('#alert');
    function modalDrop(a) {
        modal.removeClass('success').slideDown().delay(1500).fadeOut(250);
        modal.find('h2').text(a);
    }

    $("form .btn").on('click', function(e) {
        e.preventDefault();

        var name = $("input[name='name']").val();
        if (name == "") {
            $("input[name='name']").focus();
            modalDrop('Please Enter a Name');
            return false;
        }
        var email = $("input[name='email']").val();
        var emailReg = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        var valid = emailReg.test(email);
        if (!valid) {
            $("input[name='email']").focus();
            modalDrop('Please Enter a Valid Email')
            return false;
        }

        var confirm_email = $("input[name='confirm_email']").val();
        var phone = $("input[name='phone']").val();
        if (email != confirm_email) {
            $("input[name='email']").focus();
            modalDrop('Double check your email. They don\'t seem to match');
            return false;
        }

        var phone = $("input[name='phone']").val();
        if (phone == "") {
            $("input[name='phone']").focus();
            modalDrop('Please Enter a Phone Number')
            return false;
        }

        var message = $("textarea[name='message']").val();
        if (message == "") {
            $("textarea[name='message']").focus();
            modalDrop('Let us know why you\'re writing.')
            return false;
        }

        var dataString = $('form[name="contact"]').serialize();

        $.ajax({
            type: "POST",
            url: "../contact/mail.php",
            data: dataString,
            success: function() {
                modalDrop('Thanks! We\'ll be in touch!');
                modal.addClass('success');
            }
        });
    });



}); //end jquery
