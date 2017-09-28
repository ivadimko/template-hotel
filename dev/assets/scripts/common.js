document.addEventListener("DOMContentLoaded", function (event) {
	
	let tabHeading = $('.tab__heading'),
			tabText = $('.tab__text'),
			tabImage = $('.tab__image');
	$(tabHeading).eq(1).addClass('active');
	$(tabText).eq(1).addClass('active');
	$(tabImage).eq(1).addClass('active');

	tabHeading.on('click', function() {
		if ($(this).hasClass('active')) {} else {
			$(tabHeading).removeClass('active');
			$(this).addClass('active');
			$(tabImage).removeClass('active');
			$(tabImage).eq($(this).index()).addClass('active');
			$(tabText).removeClass('active');
			$(tabText).eq($(this).index()).addClass('active')
			
		}
	});
	$('.gallery').slick({
   	infinite: true,
  	slidesToShow: 3,
  	slidesToScroll: 2,
  	autoplay: true,
	  autoplaySpeed: 2000,
	  arrows: false,
	  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
	if ($(window).width() > 767) {
	$(".tab__text").mCustomScrollbar({
		axis:"y",
		autoHideScrollbar: true,
		scrollInertia: 500,
	});
		
	}


});