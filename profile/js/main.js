$(document).ready(function(){
    semantic();
    nightMode();
    width();
    decrypt();
});

function semantic() {
	$('.special.cards .image').dimmer({
  		on: 'hover'
	});

	$('.dropdown').dropdown({

    // you can use any ui transition
    transition: 'slide',
    action: 'hide'

  });
  $('.ui.menu a.item').on('click', function() { 
      $(this).addClass('active').siblings().removeClass('active');
  });

  $('.ui.menu a.all').on('click', function() {
      $('.raised.segments.hidden').transition('scale');
  });

  $('.ui.menu a.work').on('click', function() {
      $('.ui.work.raised.segments.hidden').transition('scale');
      $('.ui.education.raised.segments.visible').transition('scale');
      $('.ui.project.raised.segments.visible').transition('scale');
  });
  $('.ui.menu a.education').on('click', function() {
      $('.ui.work.raised.segments.visible').transition('scale');
      $('.ui.education.raised.segments.hidden').transition('scale');
      $('.ui.project.raised.segments.visible').transition('scale');
  });
  $('.ui.menu a.project').on('click', function() {
      $('.ui.work.raised.segments.visible').transition('scale');
      $('.ui.education.raised.segments.visible').transition('scale');
      $('.ui.project.raised.segments.hidden').transition('scale');
  });
	
  $('.ui.accordion').accordion();
  $('.ui.modal').modal();

}

function nightMode() {
  $('.night.ui.circular.button').on('click', function() {
      if ($(this).hasClass('inverted')) {
        $(this).removeClass('inverted');
        $('.card').removeClass('inverted');
        $('.ui.secondary.pointing.menu').removeClass('inverted');
        $('.ui.raised.segments').children().removeClass('inverted');
        $('.ui.ribbon.label').addClass('black');
        $('.extra > .ui.label').removeClass('grey');
        $('body').removeClass('night');
      } else {
        $(this).addClass('inverted');
        $('.card').addClass('inverted');
        $('.ui.secondary.pointing.menu').addClass('inverted');
        $('.ui.raised.segments').children().addClass('inverted');
        $('.ui.black.ribbon.label').removeClass('black');
        $('.extra > .ui.label').addClass('grey');
        $('body').addClass('night');
      }
      
  });
}

function width() {
  var windowWidth = $( window ).width();
  if (windowWidth <= 550) {
    $('.project.item').remove();
  }  
  if (windowWidth <= 450) {
    $('.education.item').remove();
  } 
  if (windowWidth <= 350) {
    $('.work.item').remove();
  }

}

function decrypt() {
  var href = $('.encrypt').attr('href');
  var cipher = $('.encrypt').text();
  plain = atob(cipher);
  plainHref = atob(href);
  $('.encrypt').html('<i class="envelope icon"></i> ' + plain);
  $('.encrypt').attr('href', plainHref);
}


  