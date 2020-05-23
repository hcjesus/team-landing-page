const images = ['images/balance.jpg','images/forest.jpg','images/hot-air-balloon.jpg','images/hot-air-balloon-ride.jpg','images/pier.jpg'];

let rand = Math.floor(Math.random() * 5) ;

const ruta = images[rand];

const bgDinamic = () => {
	$('.bg-img').css("background-image",`url(${ruta})`);
	$('.bg-img').css("background-position","center");
	$('.bg-img').css("background-repeat","no-repeat");
	$('.bg-img').css("background-size","cover");
	$('.bg-img').css("height","90%");
	$('.bg-img').css("background-color","red");
}

$(() => {
	$('.input').focusin( e =>{
		const idLabel = (e.target).id;
		$(`label[for=${idLabel}]`).addClass('style-label-focus');
		$(`.${idLabel}`).addClass('contact-icon');
	});
	$('.input').focusout(e =>{
		const idLabel = (e.target).id;
		let focus = $.trim($(e.target).val());
		if (focus.length === 0){
			$(`label[for=${idLabel}]`).removeClass('style-label-focus');
			$(`.${idLabel}`).removeClass('contact-icon');
		}
	});
	$('.prx').on('click', e => {
		if ($('.collapse').hasClass('show') == false){
			$('.prx').addClass('prxx');
			$('.prx').removeClass('prxy');
		}else{
			$('.prx').removeClass('prxx');
			$('.prx').addClass('prxy');
		
		}
	});
	$('.fa-angle-up').click(function(event) {
		/* Act on the event */
		$('html').animate({scrollTop:0},600);
	});

	$(window).resize(function(event) {
		/* Act on the event */
		console.log('hh',$(window).width());
		if ($(window).width() < 570){
			console.log($(window).width() < 570);
			$('.img-card').removeClass('cardi');
			$('.img-card').removeClass('cardi0');
		}
	});

	if ($(document).width()>=570){
		$('.img-card').addClass('cardi');
	}else{
		$('.img-card').removeClass('cardi');
	}

	
		
});




const parallaxElements = $('.parallax'), parallaxQuantity = parallaxElements.length;
$(window).on('scroll', e =>{
	window.requestAnimationFrame(() => {
		for (let i = 0; i < parallaxQuantity; i++){
			const currentElement = parallaxElements.eq(i);
			let scrolled = $(window).scrollTop();
			currentElement.css({
				transform: `translate3d(0,${scrolled * 0.3}px,0)`,
			})
		}
	});
	if ($(document).scrollTop()>=600){
		$('.navi').addClass('naveffect');
	}else{
		$('.navi').removeClass('naveffect');
	}
	if ($(document).scrollTop()>=1200){
		if ($('.img-card').hasClass('cardi') == true) {
			$('.cardi').addClass('cardi0');	
		}
		
	}
	/*if($(document).scrollTop()>=600){	
		$('.arriba').slideDown(600);
	}else{
		$('.arriba').slideUp(600);
	}*/
	if($(document).scrollTop()>=1000){	
		$('.fa-angle-up').addClass('arriba');
	}else{
		$('.fa-angle-up').removeClass('arriba');
	}
		

	


});

const parallaxElements2 = $('.parallax-2'), parallaxQuantity2 = parallaxElements2.length;
$(window).on('scroll', ()=>{
	window.requestAnimationFrame(() => {
		for (let i = 0; i < parallaxQuantity2; i++){
			const currentElement = parallaxElements2.eq(i);
			let scrolled = $(window).scrollTop();
			currentElement.css({
				transform: `translate3d(0,${scrolled * 0.2}px,0)`,
			})
		}
	})
});

