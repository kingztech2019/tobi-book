/*
	Striped by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/


function fbShare(){
	window.plugins.socialsharing.shareViaFacebook('Message via Facebook', 
                                                 null /* img */, 
                                                 "http://amazon.com/dp/B078S25GMB/ref=apps_sf_sta", 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function whatsappShare(){
	window.plugins.socialsharing.shareViaWhatsApp('Message via WhatsApp',
                                                 null /* img */,
                                                 "http://amazon.com/dp/B078S25GMB/ref=apps_sf_sta" /* url */, 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
};

function twitterShare(){
	 window.plugins.socialsharing.shareViaTwitter('Message via Twitter',
                                                 null /* img */, 
                                                 'http://amazon.com/dp/B078S25GMB/ref=apps_sf_sta', 
                                                 null, 
                                                 function(errormsg){alert("Error: Cannot Share")}
                                                 );
  };

 function otherShare(){
	 window.plugins.socialsharing.share('www.amazon.com/dp/B078S25GMB/ref=apps_sf_sta', null, null, null);
  };

function onDeviceReady() {
}


function domLoaded(){
  document.addEventListener("deviceready", onDeviceReady, false);

}


(function($) {

	skel.breakpoints({
		desktop: '(min-width: 737px)',
		wide: '(min-width: 1201px)',
		narrow: '(min-width: 737px) and (max-width: 1200px)',
		narrower: '(min-width: 737px) and (max-width: 1000px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$document = $(document);

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Off-Canvas Sidebar.

			// Height hack.
				var $sc = $('#sidebar, #content'), tid;

				$window
					.on('resize', function() {
						window.clearTimeout(tid);
						tid = window.setTimeout(function() {
							$sc.css('min-height', $document.height());
						}, 100);
					})
					.on('load', function() {
						$window.trigger('resize');
					})
					.trigger('resize');

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#sidebar" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Sidebar
				$('#sidebar')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'sidebar-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #sidebar, #main')
						.css('transition', 'none');

	});

})(jQuery);

//loader
 //  var overlay =
 // document.getElementById("overlay");
 // window.addEventListener('load', function(){
 // overlay.style.display='none';
 // });

