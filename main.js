$(function() {
    $('#myForm').on('submit', function(e) {
        if(grecaptcha.getResponse() == "") {
            e.preventDefault();
            alert("Please confirm you are not a robot.");
        } else {
            e.preventDefault();
            var name = $('#name').val();
            var email = $('#email').val();
            var subject = $('#subject').val();
            var message = $('#message').val();
            $('#formData').html('Name: ' + name + '<br>Email: ' + email + '<br>Subject: ' + subject + '<br>Message: ' + message).show();
            $('#newEntry').show();
            $('#contactForm').hide();
        }
    });

    $('#newEntry').click(function() {
        $('#formData').hide().empty();
        $('#newEntry').hide();
        $('#contactForm').show();
        $('#myForm')[0].reset();
        grecaptcha.reset();
    });
});
