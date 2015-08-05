	$(document).ready(function() {

// slide out menu, including pushing the content over		
        $('.menu-link').bigSlide({
        	side:'right',
        	easyClose: 'true',
        	speed: 500
        });

// makes site animations less jerky

        $('#menu').smoothState();

// changes the style of the hamburger menu link as the page is scrolled

        $('nav.fixed').midnight();


// show current weather in the site footer

		$.simpleWeather({
		    location: 'San Diego, CA',
		    woeid: '',
		    unit: 'f',
		    success: function(weather) {
		      html = '<p>'+'Current Temperature : '+weather.temp+'&deg;'+weather.units.temp+'</h3>';
		  
		      $("#weather").html(html);
		    },
		    error: function(error) {
		      $("#weather").html('<p>'+error+'</p>');
		    }
		  });

// lightbox / dialog plugin, for image sources and displaying full-sized versions of smaller images

		  $('.open-popup-link').magnificPopup({
			  type:'inline',
			  midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
			});

    });