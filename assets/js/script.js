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
	  strings: ['Web Developer'],
	  typeSpeed: 80,
	  backSpeed: 50,
	  // loop: true,
	})
})