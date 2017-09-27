document.addEventListener("DOMContentLoaded", function (event) {
mobileNav();
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
  });
	$('.item__img').hover(
		function(){
			$(this).parent().addClass('active');
	},
		function(){
			$(this).parent().removeClass('active');
		});


});

//Mobile menu function
function mobileNav() {
	var menu 			= document.querySelector('.header__menu'),
		mobilemenu 		= document.querySelector('.mobile-nav__menu'),
		JSinit 			= document.querySelector('.js_mobile-nav'),
		burger 			= document.querySelectorAll('.burger'),
		activeClass 	= 'open';
	function toggle() {
		JSinit.classList.toggle(activeClass);
	}
	if (mobilemenu.innerHTML == 0)
		mobilemenu.innerHTML = menu.innerHTML;

	/* for (var i = 0; i < burger.length; i++) {
			burger[i].addEventListener('click', toggle);
		} */
	for (var i = 0; i < burger.length; i++) {
		burger[i].onclick = toggle;
		};
}
