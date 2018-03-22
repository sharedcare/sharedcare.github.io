$(document).ready(function () {
    onload();
});

// Contact method using ajax post
function onSubmit(token) {
    var url = "https://aws.sharedcare.io/send-email/";
    $.ajax({
        crossDomain: true,
        method: "POST",
        url: url,
        data: $('form').serialize(),
        statusCode: {
            200: function () {
                $('.toggle.button').removeClass('red loading primary').addClass('green right labeled icon').html('Sent ' +
                    '<i class="check icon"></i>');
            },
            400: function () {
                failOnSubmit();
            },
            403: function () {
                failOnSubmit();
            },
            500: function () {
                failOnSubmit();
            }
        },
        error: function () {
            failOnSubmit();
        }
    });
}

function failOnSubmit() {
    $('.toggle.button').removeClass('green loading primary').addClass('red right labeled icon').html('Failed ' +
        '<i class="times icon"></i>');
}

function validate(event) {
    event.preventDefault();
    $('.ui.form.error')
        .form({
            fields: {
                name     : 'empty',
                email    : 'email',
                message  : 'empty'
            },
            inline : true,
            on     : 'blur'
        })
    ;
    if( $('.ui.form').form('is valid')) {
        // form is valid (both email and name)
        $('.toggle.button').addClass('loading');
        grecaptcha.execute();
    }

}

function resend() {
    $('.loading.toggle.button').removeClass('loading').addClass('right labeled icon').html('Resend ' +
        '<i class="refresh icon"></i>');
    $('.red.toggle.button').removeClass('red').addClass('primary').html('Resend ' +
        '<i class="refresh icon"></i>');
    $('.green.toggle.button').removeClass('green').addClass('primary').html('Resend ' +
        '<i class="refresh icon"></i>');
}

function onload() {
    var element = document.getElementById('send');
    element.onclick = validate;
}
