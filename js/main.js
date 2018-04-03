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


  // Search
    var sitemapContent = [
            {
                title: 'Home',
                url: '//sharedcare.io',
                description: 'Homepage of sharedcare.io',
            },
            {
                title: 'Profile',
                url: '//sharedcare.io/profile/',
                description: 'Profile page',
            },
            {
                title: 'Gallery',
                url: '//sharedcare.io/gallery/',
                description: 'Gallery page',
            },
            {
                title: 'Log',
                url: '//sharedcare.io/log/',
                description: 'Log page',
            },
            {
                title: 'Resume',
                url: '//sharedcare.io/pdf/Resume.pdf',
                description: 'My resume pdf file',
            },
            {
                title: 'Sitemap',
                url: '//sharedcare.io/sitemap.html',
                description: 'Site Map page for user',
            },
            {
                title: 'Sitemap.xml',
                url: '//sharedcare.io/sitemap.xml',
                description: 'XML site map for search bot',
            },
            {
                title: 'Home - Image Captioning',
                url: '//sharedcare.io/ImageCaptioning/',
                description: 'A deep learning project',
            },
            {
                title: 'Proposal - Image Captioning',
                url: '//sharedcare.io/ImageCaptioning/proposal/',
                description: 'The proposal of Image Captioning',
            },
            {
                title: 'SharedApp',
                url: '//app.sharedcare.io',
                description: 'Homepage of SharedApp',
            },
            {
                title: 'Grader | SharedApp',
                url: '//app.sharedcare.io/grader/',
                description: 'An efficient excel editor',
            },
            {
                title: 'Blog',
                url: '//blog.sharedcare.io',
                description: 'Homepage of blog',
            }
        ];
    $('.ui.sitemap.search')
        .search({
            source : sitemapContent,
            searchFields   : [
                'title',
                'description',
                'url'
            ],
            fullTextSearch: true
        });

  $('.menu > .ui.search')
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
              maxResults = 6
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
        url: 'https://api.github.com/search/repositories?q={query}+user:sharedcare+fork:true\n'
      }
    })
  ;

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


  