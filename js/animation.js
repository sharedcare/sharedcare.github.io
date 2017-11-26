$(function () {

    onepage();
    label();
    button();
    list();
    naive();

});

function list() {
    $('.list').on("click",(function(e) {
        if ($('#list').children()) {
            $('#list').children().detach();
        }

        $('#list').append("<div class='view'></div>");
        switch($(this).attr('id')) {
            case '1':
                $('.view').append("<p class='title'>Fall 2015 - Present</p><p>B.S. Computer Science</p>");
                break;
            case '2':
                $('.view').append("<p class='title'>Fall 2016 - Present</p><p>Research Assistant (RA)</p><p>Department of Radiation Oncology</p>");
                break;
            case '3':
                $('.view').append("<p class='title'>Fall 2017 - Present</p><p>Participants</p><p>Department of Computer Science</p>");
                break;
            case '4':
                $('.view').append("<p>Python (Preferred)</p><p>Java</p><p>C#</p><p>Swift</p><p>HTML/CSS/JS</p><p>PHP</p>");
                break;
            case '5':
                $('.view').append("<p>Amazon Web Services</p><p>Tesseract OCR</p><p>TensorFlow</p>");
                break;
            default:
                $('.view').append("<p></p>");
        }
        e.stopPropagation();
    }));

    $(document).click(function() {
        if ($('#list').children()) {
            $('#list').children().detach();
        }
    });
}

function naive() {
    $('.naive').on("click", (function(e) {
        if ($('#about').children('.container').get('id') != 'young') {
            $('#about').children('.container').fadeOut(600, function() {
                $('#about').children('.container').detach();
                $('#about').append("<div class='container' style='display: none;' id='young'><div class='row'><div class='col-md-12'><h2 class='heading'>About him</h2><div class='row'><div class='col-md-6'><p class='lead'>Too Young, Too Simple. Sometimes Naïve</p><p>There's no such implication whatsoever. Everything should be done in accordance according to the Basic Law, and the election laws. What you've just asked me, I could have said 'No Comment.' But you guys wouldn't be happy. So what should I do? So I said does not mean I imperially appoint him. But you all, you the media need to learn more. You are very familiar with the Western set of 'value'. But after all you are 'too young'. </p><p>Let me tell you. I've seen it all. Which country in the West have I not been to? You should Know Mike Wallece in the U.S., he's way above you all. I and he talked and laughed comfortably. The media need to raise your level of Knowledge. You always run faster than Western journalists. But the questions you keep asking - 'too simple, sometimes naive.' I'm speaking to you as an elder. In spearding the news, if your reports are inaccurate, you have to be responsible. I did not say giving an imperial appointment. No such meaning. You all, do not always trying to make a big news.</p></div><div class='col-md-5 col-md-offset-1'><p><img src='img/Naive.jpg' alt='' class='img-responsive img-circle'></p><p style='text-align: center;'>'Naïve!', 'I'm angry!'</p></div></div></div></div></div>");
                $('#about').children('.container').fadeIn();
            });
        } else {

        }
        
    }));
}

function button() {
    
    var btn = $('.social').children('a');
    

    var width = 0;
    var height = 0;
    var r = 0;
    setSize();

    function setSize() {
      width = $(window).width();
      height = $(window).height();
      r = Math.sqrt(width * width + height * height);
    }
    $(window).resize(setSize);

    btn.on("click",(function(e) {

      $('#nav').fadeOut(600);
      $('body').prepend("<div class='background'></div>");
      var background = $('.background');
      $(this).addClass('current');
      var circle = $("<div unselectable='on' id='circle'></div>");
      background.append(circle);
      circle.css({
        position: 'absolute',
        'background-color': $(this).css('background-color'),
        width: 0,
        height: 0,
        "border-radius": "50%",
        'box-shadow': '0px 0px 15px 5px rgba(0, 0, 0, 0.5)',
        left: e.pageX,
        top: e.pageY,
        'margin-left': 0,
        'margin-top': 0,
        'webkit-user-select': 'none',
        '-moz-user-select': 'none',
        '-ms-user-select': 'none'
      });
      circle.animate({
        width: (r * 2),
        height: (r * 2),
        'margin-left': -r,
        'margin-top': -r
      }, {
        duration: 600,
        easing: "easeInOutCubic",
        queue: false,
        complete: function() {
         circle.parent().css('background-color',
                        '#fff');
         circle.fadeOut("fast");
        }
      });

      var Url = $(this).attr('title')
      setTimeout(function(){window.location.replace(Url)},600);
    }));
    
}

function label() {
  $(document).ready(function() {

      $(".label_better").label_better({
        position: "top", // This will let you define the position where the label will appear when the user clicked on the input fields. Acceptable options are "top", "bottom", "left" and "right". Default value is "top".
        animationTime: 500, // This will let you control the animation speed when the label appear. This option accepts value in milliseconds. The default value is 500.
        easing: "bounce", // This option will let you define the CSS easing you would like to see animating the label. The option accepts all default CSS easing such as "linear", "ease" etc. Another extra option is you can use is "bounce". The default value is "ease-in-out".
        offset: 40, // You can add more spacing between the input and the label. This option accepts value in pixels (without the unit). The default value is 20.
        hidePlaceholderOnFocus: true // The default placeholder text will hide on focus
      });

      $(".label_better_large").label_better({
        position: "top", // This will let you define the position where the label will appear when the user clicked on the input fields. Acceptable options are "top", "bottom", "left" and "right". Default value is "top".
        animationTime: 500, // This will let you control the animation speed when the label appear. This option accepts value in milliseconds. The default value is 500.
        easing: "bounce", // This option will let you define the CSS easing you would like to see animating the label. The option accepts all default CSS easing such as "linear", "ease" etc. Another extra option is you can use is "bounce". The default value is "ease-in-out".
        offset: 110, // You can add more spacing between the input and the label. This option accepts value in pixels (without the unit). The default value is 20.
        hidePlaceholderOnFocus: true // The default placeholder text will hide on focus
      });
  });
}

function onepage() {
	$(".main").onepage_scroll({
	   sectionContainer: "section",     // sectionContainer accepts any kind of selector in case you don't want to use section
	   easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
	                                    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
	   animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
	   pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
	   updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
	   beforeMove: function(index) {},  // This option accepts a callback function. The function will be called before the page moves.
	   afterMove: function(index) {fade()},   // This option accepts a callback function. The function will be called after the page moves.
	   loop: true,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
	   keyboard: true,                  // You can activate the keyboard controls
	   responsiveFallback: 991,        // You can fallback to normal page scroll by defining the width of the browser in which
	                                    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
	                                    // the browser's width is less than 600, the fallback will kick in.
	   direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".  
	});
}

function fade() {
    if(document.body.className != ("viewing-page-1")){
        $('.navbar-default').addClass('opaque');
        $('.navbar-pagination').children('li').children('a').addClass('opaque');
        $('.navbar-brand').addClass('opaque');
    } else {
        $('.navbar-default').removeClass('opaque');
        $('.navbar-pagination').children('li').children('a').removeClass('opaque');
        $('.navbar-brand').removeClass('opaque');
    }
}

$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {

        var maxHeight = 0;
        var children = $(this).find('.same-height');
        children.height('auto');
        if ($(window).width() > 768) {
            children.each(function () {
                if ($(this).innerHeight() > maxHeight) {
                    maxHeight = $(this).innerHeight();
                }
            });
            children.innerHeight(maxHeight);
        }

        maxHeight = 0;
        children = $(this).find('.same-height-always');
        children.height('auto');
        children.each(function () {
            if ($(this).innerHeight() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }
        });
        children.innerHeight(maxHeight);
    });
}

/* this function is here becase chrome renders really blurry texts with transformations used in CSS to center the section content */

$.fn.alignSections = function () {

    if (/chrom(e|ium)/.test(navigator.userAgent.toLowerCase())) {
        $('section .content').each(function () {
            var element = $(this);
            var contentHeight = element.height();
            var paddingTop = -(contentHeight) / 2;

            if ($(window).width() > 1000) {

                element.css('-webkit-transform', 'translate(0,0)');
                element.css('-ms-transform', 'translate(0,0)');
                element.css('transform', 'translate(0,0)');
                element.css('margin-top', paddingTop + 'px');
            }
            else {
                element.css('margin-top', 0);
            }
        });
    }
}

$(window).load(function () {

    windowWidth = $(window).width();

    $(this).alignElementsSameHeight();
    $(this).alignSections();


});

$(window).resize(function () {

    newWindowWidth = $(window).width();

    if (windowWidth !== newWindowWidth) {
        setTimeout(function () {
            $(this).alignElementsSameHeight();
            $(this).alignSections();
        }, 100);
        windowWidth = newWindowWidth;
    }

});