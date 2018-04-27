// main.js
// by Chen, Yizhen
// Main JavaScript functions for sharedcare.io
// Warn: Using jQuery and Semantic javascript library
$(document).ready(function(){
    semantic();
});

function semantic() {

  // fix menu when passed
  $('.masthead')
    .visibility({
      once: false,
      onBottomPassed: function() {
        $('.fixed.menu').transition('fade in');
      },
      onBottomPassedReverse: function() {
        $('.fixed.menu').transition('fade out');
      }
    })
  ;

  // create sidebar and attach to menu open
  $('.ui.sidebar')
    .sidebar('attach events', '.toc.item')
  ;

	$('.special.cards .image').dimmer({
  		on: 'hover'
	});

  $('.ui.menu a.item').on('click', function() { 
      $(this).addClass('active').siblings().removeClass('active');
  });

	$('.dropdown').dropdown({

    // you can use any ui transition
    transition: 'slide',
    action: 'hide'

  });
	
  $('.ui.accordion').accordion();

  // Pop up
  $('.item.site').popup({
    inline     : true,
    hoverable  : true,
    position   : 'top center',
    delay: {
      show: 300,
      hide: 500
    }
  });

  $('.ui.modal').modal({
      blurring: false
  }).modal('attach events', '.contact', 'show');

}

function enterLink(e) {
    if (e.keyCode == 13) {
        gotoLink();
    }
}

function gotoLink() {
    var input = document.getElementById('goto').value;
    var url = "https://sharedcare.io/" + input;
    window.open(url);
}

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


  