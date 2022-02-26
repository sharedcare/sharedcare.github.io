$(document).ready( function() {
    // Search
    var sitemapContent = [
        {
            category: 'Home',
            title: 'Home',
            url: '//sharedcare.io',
            description: 'Homepage of sharedcare.io',
        },
        {
            category: 'Home',
            title: 'Profile',
            url: '//sharedcare.io/profile/',
            description: 'Profile page',
        },
        {
            category: 'Home',
            title: 'Gallery',
            url: '//sharedcare.io/gallery/',
            description: 'Gallery page',
        },
        {
            category: 'Home',
            title: 'Log',
            url: '//sharedcare.io/log/',
            description: 'Log page',
        },
        {
            category: 'Home',
            title: 'Resume',
            url: '//sharedcare.io/pdf/Resume.pdf',
            description: 'My resume pdf file',
        },
        {
            category: 'Home',
            title: 'Sitemap',
            url: '//sharedcare.io/sitemap.html',
            description: 'Site Map page for user',
        },
        {
            category: 'Home',
            title: 'Sitemap.xml',
            url: '//sharedcare.io/sitemap.xml',
            description: 'XML site map for search bot',
        },
        {
            category: 'Blog',
            title: 'Home - Image Captioning',
            url: '//sharedcare.io/ImageCaptioning/',
            description: 'A deep learning project',
        },
        {
            category: 'Blog',
            title: 'Proposal - Image Captioning',
            url: '//sharedcare.io/ImageCaptioning/proposal/',
            description: 'The proposal of Image Captioning',
        },
        {
            category: 'App',
            title: 'SharedApp',
            url: '//app.sharedcare.io',
            description: 'Homepage of SharedApp',
        },
        {
            category: 'App',
            title: 'Grader | SharedApp',
            url: '//app.sharedcare.io/grader/',
            description: 'An efficient excel editor',
        },
        {
            category: 'Blog',
            title: 'Blog',
            url: '//blog.sharedcare.io',
            description: 'Homepage of blog',
        },
        {
            category: 'App',
            title: 'Gallery App',
            url: '//gallery-app.sharedcare.io',
            description: 'A react app',
        }
    ];
    $('.ui.sitemap.search')
        .search({
            source : sitemapContent,
            type : 'category',
            searchFields   : [
                'title',
                'description',
                'url'
            ],
            fullTextSearch: 'exact'
        });

    $('.ui.github.search')
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
});