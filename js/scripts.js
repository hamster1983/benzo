$(document).ready(function(){
	
	$('[name="phone"]').inputmask("+7(999) 999-9999");

	$('.up').click(function (){
		$('html, body').animate({ scrollTop: 0 }, 1000);
	});
	
	$(window).scroll(function(){
		if($(this).scrollTop() >= 300){
			$('.up').css('opacity',0.7);
		}
		else {
			$('.up').css('opacity',0);
		}

		let scroll = $(this).scrollTop();
		$('.remont').each(function(){
			if($(this).offset().top - $(this).outerHeight() <= scroll) {
				$(this).css('opacity',1);
			}
		})
	});
	
	$('#rem-quiz').on('slid.bs.carousel', function() {
	    $('#current').text(+$('.carousel-indicators li.active').attr('data-slide-to')+1);
	});
	
	$('#rem-quiz .btn-yellow').click(function(){
		let parent = $(this).closest('.question');
		let title = parent.attr('data-title');
		let result = '';
		parent.find('input').each(function(){
			if($(this).attr('type') == 'text') {
				result = $(this).val();
			}
			else if($(this).attr('type') == 'radio' && $(this).is(':checked')) {
				result = $(this).val();
			}
			else if($(this).attr('type') == 'checkbox' && $(this).is(':checked')) {
				result += $(this).val()+'  ';
			}
		});
		$('#rem-quiz [type="hidden"]').each(function(){
			if($(this).attr('name') == title) {
				$(this).val(result);
			}
		})
	})
	
	$('.top-icons').slick({
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 1000,
	  arrows: false,
	  dots: false,
	  speed: 1000,
	  slidesToShow: 11,
	  slidesToScroll: 3,
	  responsive: [
		{
		  breakpoint: 1600,
		  settings: {
			slidesToShow: 9,
		  }
		},
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 7,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 5,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 2,
		  }
		},
		{
		  breakpoint: 576,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 2,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		  }
		}
	  ] 
	});
	
	$('.bottom-icons').slick({
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 1000,
	  arrows: false,
	  dots: false,
	  speed: 1000,
	  slidesToShow: 8,
	  slidesToScroll: 3,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 7,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 5,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 4,
			slidesToScroll: 2,
		  }
		},
		{
		  breakpoint: 575,
		  settings: {
			slidesToShow: 3,
			slidesToScroll: 2,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		  }
		}
	  ] 
	});
	
	$('.part-items').slick({
	  infinite: true,
	  autoplay: true,
	  arrows: true,
	  dots: false,
	  speed: 1500,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
		{
		  breakpoint: 1199,
		  settings: {
			slidesToShow: 3,
		  }
		},
		{
		  breakpoint: 991,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 767,
		  settings: {
			slidesToShow: 2,
		  }
		},
		{
		  breakpoint: 575,
		  settings: {
			slidesToShow: 1,
		  }
		}
	  ] 
	});
	
});