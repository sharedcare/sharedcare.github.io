$(document).ready(function(){
    semantic();
    nightMode();
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
    })
    .modal('attach events', '.contact', 'show');


  // Search
  var content = [
    { title: 'Andorra' },
    { title: 'United Arab Emirates' },
    { title: 'Afghanistan' },
    { title: 'Antigua' },
    { title: 'Anguilla' },
    { title: 'Albania' },
    { title: 'Armenia' },
    { title: 'Netherlands Antilles' },
    { title: 'Angola' },
    { title: 'Argentina' },
    { title: 'American Samoa' },
    { title: 'Austria' },
    { title: 'Australia' },
    { title: 'Aruba' },
    { title: 'Aland Islands' },
    { title: 'Azerbaijan' },
    { title: 'Bosnia' },
    { title: 'Barbados' },
    { title: 'Bangladesh' },
    { title: 'Belgium' },
    { title: 'Burkina Faso' },
    { title: 'Bulgaria' },
    { title: 'Bahrain' },
    { title: 'Burundi' }
    // etc
  ];

  $('.ui.search')
    .search({
      type          : 'category',
      minCharacters : 3,
      apiSettings   : {
        onResponse: function(githubResponse) {
          var
            response = {
              results : {}
            }
          ;
          // translate GitHub API response to work with search
          $.each(githubResponse.items, function(index, item) {
            var
              language   = item.language || 'Unknown',
              maxResults = 8
            ;
            if(index >= maxResults) {
              return false;
            }
            // create new language category
            if(response.results[language] === undefined) {
              response.results[language] = {
                name    : language,
                results : []
              };
            }
            // add result to category
            response.results[language].results.push({
              title       : item.name,
              description : item.description,
              url         : item.html_url
            });
          });
          return response;
        },
        url: 'https://api.github.com/search/repositories?q={query}'
      }
    })
  ;
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



  