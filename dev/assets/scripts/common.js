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
			$(tabImage).removeClass('inactive');
			$('.header__images').find('.active').removeClass('active').addClass('inactive').fadeOut();
			$(tabImage).removeClass('active');
			$(tabImage).eq($(this).index()).addClass('active').fadeIn();
			$(tabText).removeClass('active');
			$(tabText).fadeOut().eq($(this).index()).fadeIn();
			$(tabText).eq($(this).index()).addClass('active');
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
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
	$('.item__img').hover(
		function(){
			$(this).parent().addClass('active');
	},
		function(){
			$(this).parent().removeClass('active');
		});
$(".tab__text").mCustomScrollbar({
	axis:"y",
	autoHideScrollbar: true,
}); 
$(".body-wrapper").mCustomScrollbar({
	axis:"y",
	autoHideScrollbar: true,
}); 

});
$(window).scroll(function(){
		console.log('jo');
		
	});