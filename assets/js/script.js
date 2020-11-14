$(function() {
	// nav
	$(window).scroll(function() {
		var scroll = $(window).scrollTop()
		var navbar = $('.navbar')
		if(scroll >= 55) {
			navbar.addClass('nav-sticky')
		} else {
			navbar.removeClass('nav-sticky')
		}
	})

	var typed = new Typed('.typed', {
	  strings: ['Web Developer', 'Web Enthusiast', 'Full Stack Developer'],
	  typeSpeed: 100,
	  backSpeed: 70,
	  loop: true,
	})

	$('a.page-scroll').on('click', function(e) {
		e.preventDefault()
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		})
	})
})