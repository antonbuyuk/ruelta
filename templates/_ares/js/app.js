$(document).foundation();

$(window).on("load",function(){
	$('select').styler();

	$('.burger').click(function(event) {
		$(this).toggleClass('active');
		$('.header-mobile').slideToggle('fast')
	});

	$('.checkbox input').click(function(event) {
		$(this).next('.checkbox-box').toggleClass('checked');
	});

	$('.radio input').click(function(event) {
		$(this).next('.radio-box').toggleClass('checked');
	});

	$('.modal-close').click(function(event) {
		$(this).parents('.modal').removeClass('active');
		$(this).parents('.overlay').removeClass('active');
	});

	$('.sidebar-active').click(function(event) {
		$(this).next('.sidebar-menu').slideToggle('fast');
	});

	$('.accordion-item').each(function(index, el) {
	
		$(this).click(function(event) {
			if ($(this).hasClass('is-active')) {
				$(this).children('.accordion-title').children('.icon-down').addClass('icon-up');
			} else {
				$(this).children('.accordion-title').children('.icon-down').removeClass('icon-up');
			}
		});
	});
});

$(document).ready(function() {
	$('.btn-callback').click(function(event) {
		$('.overlay').addClass('active');
		$('.modal-callback').addClass('active');
	});

	$('.btn-login').click(function(event) {
		$('.overlay').addClass('active');
		$('.modal-login').addClass('active');
	});
});

/*Smart search*/
$(document).ready(function() {
	$('.smart-search .form-item i').click(function(event) {
		$(this).parents('.form-item').next('.smart-list').slideToggle('fast');
	});

	$('.smart-search input').each(function() {
		$(this).keydown(function(event) {
			if ($(this).val().length > 0) {
				$(this).parents('.form-item').next('.smart-list').slideDown('fast');
			} else if ($(this).val().length < 1) {
				$(this).parents('.form-item').next('.smart-list').slideUp('fast');
			}
		});
	});

	$('.smart-list').mouseleave(function(event) {
		$(this).slideUp('fast');
	});

	$('.smart-item').click(function() {
		var selRegion = $(this).data('item');

		$('.smart-search input').val(selRegion);
	});
});

/* Carousel */
$(document).ready(function() {
	$('.carousel-block').owlCarousel({
	    nav:false,
	    items:1,
	    autoHeight:true
	})

	if ($('.article-carousel .item').length > 1) {
		$('.article-carousel').owlCarousel({
		    margin:0,
		    nav:true,
		    navText: ['<i class="icon-left"></i>','<i class="icon-right"></i>'],
		    items:1,
		})
	} else {
		$('.article-carousel').owlCarousel({
		    margin:0,
		    nav:false,
		    dots: false,
		    navText: ['<i class="icon-left"></i>','<i class="icon-right"></i>'],
		    items:1,
		})
	}

	$('.team-carousel').owlCarousel({
	    nav:false,
	    margin: 30,
	    responsive:{
	        0:{
	            items:1
	        },
	        640:{
	            items:3
	        },
	        1024:{
	            items:4
	        }
	    }
	})

	$('.team-carousel-3').owlCarousel({
	    nav:false,
	    margin: 30,
	    responsive:{
	        0:{
	            items:1
	        },
	        640:{
	            items:2
	        },
	        1024:{
	            items:3
	        }
	    }
	})

	$('.card-carousel').owlCarousel({
	    nav:true,
	    navText: ['<i class="icon-left"></i>','<i class="icon-right"></i>'],
	    margin: 30,
	    responsive:{
	        0:{
	            items:1
	        },
	        640:{
	            items:3
	        },
	        1024:{
	            items:3
	        }
	    }
	})

	if ($('.slider-card').length) {
		$('.slider-card').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-mini'
		});
	}

	if ($('.slider-mini').length) {
		if ($(window).width() > '930'){
			$('.slider-mini').slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				asNavFor: '.slider-card',
				dots: false,
				vertical: true,
				nav: true,
				infinite: false,
				focusOnSelect: true
			});
		}

		if ($(window).width() < '930'){
			$('.slider-mini').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				asNavFor: '.slider-card',
				dots: false,
				vertical: false,
				nav: true,
				infinite: false,
				focusOnSelect: true
			});
		}
	}
});

/*Upload File*/
$(document).ready(function() {
    var wrapper = $( ".form-upload" ),
        inp = wrapper.find( "input" ),
        btn = wrapper.find( "button" ),
        lbl = wrapper.find( "div" );

    lbl.focus(function(){
        inp.focus()
    });
    // Crutches for the :focus style:
    inp.focus(function(){
        wrapper.addClass( "focus" );
    }).blur(function(){
        wrapper.removeClass( "focus" );
    });

    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

    inp.change(function(){
        var file_name;
        if( file_api && inp[ 0 ].files[ 0 ] )
            file_name = inp[ 0 ].files[ 0 ].name;
        else
            file_name = inp.val().replace( "C:\\fakepath\\", '' );

        if( ! file_name.length )
            return;

        if( lbl.is( ":visible" ) ){
            lbl.text( file_name );
        }else
            lbl.text( file_name );
    }).change();
});

/*Yandex maps*/
$(document).ready(function() {
	if ($('#map').length > 0) {
	 	ymaps.ready(function () {
	    var myMap = new ymaps.Map('map', {
	            center: [55.73, 37.59],
	            zoom: 5
	        }, {
	            searchControlProvider: 'yandex#search'
	        }),

	        myPlacemark1 = new ymaps.Placemark([55.73, 37.59], {
	            balloonContent: '<p><b>Храпалёва наталья викторовна</b><br><b>менеджер</b><br><b>Регион:</b> Витебская область, г. Молодечно, Украина<br><b>Адрес:</b> 220310, Республика Беларусь, Минская область, г. Молодечно, ул. Виленская, 4<br><b>Тел. моб.:</b> <a href="tel:+375 (29) 350-44-06">+375 (29) 350-44-06</a><br><b>Телефон:</b> <a href="tel:+375 (176) 73-72-67">+375 (176) 73-72-67</a><br><b>Факс:</b> <a href="tel:+375 (176) 77-45-63">+375 (176) 77-45-63</a><br><b>e-mail:</b> <a href="mailto:saa@ruelta.by">saa@ruelta.by</a><br><b>Skype:</b> <a href="skype:saa-mld.ruelta.ru">saa-mld.ruelta.ru</a><br></p>'
	        },{
	            iconLayout: 'default#image',
	            iconImageHref: 'templates/_ares/img/svg/yandex.svg',
	            iconImageSize: [30, 41],
	            iconImageOffset: [-15, -41]
	        });


	    myMap.geoObjects
	        .add(myPlacemark1)
	    });
	};

	if ($('#map-project').length > 0) {
	 	ymaps.ready(function () {
	    var myMap = new ymaps.Map('map-project', {
	            center: [55.73, 37.59],
	            zoom: 7
	        }, {
	            searchControlProvider: 'yandex#search'
	        }),

	        myPlacemark1 = new ymaps.Placemark([55.73, 37.59], {
	            balloonContent: '<p><b>Храпалёва наталья викторовна</b><br><b>менеджер</b><br><b>Регион:</b> Витебская область, г. Молодечно, Украина<br><b>Адрес:</b> 220310, Республика Беларусь, Минская область, г. Молодечно, ул. Виленская, 4<br><b>Тел. моб.:</b> <a href="tel:+375 (29) 350-44-06">+375 (29) 350-44-06</a><br><b>Телефон:</b> <a href="tel:+375 (176) 73-72-67">+375 (176) 73-72-67</a><br><b>Факс:</b> <a href="tel:+375 (176) 77-45-63">+375 (176) 77-45-63</a><br><b>e-mail:</b> <a href="mailto:saa@ruelta.by">saa@ruelta.by</a><br><b>Skype:</b> <a href="skype:saa-mld.ruelta.ru">saa-mld.ruelta.ru</a><br></p>'
	        },{
	            iconLayout: 'default#image',
	            iconImageHref: 'templates/_ares/img/svg/yandex.svg',
	            iconImageSize: [30, 41],
	            iconImageOffset: [-15, -41]
	        });

	        myPlacemark2 = new ymaps.Placemark([54.73, 37.59], {
	            balloonContent: '<p><b>Храпалёва наталья викторовна</b><br><b>менеджер</b><br><b>Регион:</b> Витебская область, г. Молодечно, Украина<br><b>Адрес:</b> 220310, Республика Беларусь, Минская область, г. Молодечно, ул. Виленская, 4<br><b>Тел. моб.:</b> <a href="tel:+375 (29) 350-44-06">+375 (29) 350-44-06</a><br><b>Телефон:</b> <a href="tel:+375 (176) 73-72-67">+375 (176) 73-72-67</a><br><b>Факс:</b> <a href="tel:+375 (176) 77-45-63">+375 (176) 77-45-63</a><br><b>e-mail:</b> <a href="mailto:saa@ruelta.by">saa@ruelta.by</a><br><b>Skype:</b> <a href="skype:saa-mld.ruelta.ru">saa-mld.ruelta.ru</a><br></p>'
	        },{
	            iconLayout: 'default#image',
	            iconImageHref: 'templates/_ares/img/svg/yandex.svg',
	            iconImageSize: [30, 41],
	            iconImageOffset: [-15, -41]
	        });


	    myMap.geoObjects
	        .add(myPlacemark1)
	        .add(myPlacemark2)
	    });
	}

	if ($('#map-mini').length > 0) {
	 	ymaps.ready(function () {
	    var myMap = new ymaps.Map('map-mini', {
	            center: [55.73, 37.59],
	            zoom: 14
	        }, {
	            searchControlProvider: 'yandex#search'
	        }),

	        myPlacemark1 = new ymaps.Placemark([55.73, 37.59], {
	            balloonContent: '<p><b>Храпалёва наталья викторовна</b><br><b>менеджер</b><br><b>Регион:</b> Витебская область, г. Молодечно, Украина<br><b>Адрес:</b> 220310, Республика Беларусь, Минская область, г. Молодечно, ул. Виленская, 4<br><b>Тел. моб.:</b> <a href="tel:+375 (29) 350-44-06">+375 (29) 350-44-06</a><br><b>Телефон:</b> <a href="tel:+375 (176) 73-72-67">+375 (176) 73-72-67</a><br><b>Факс:</b> <a href="tel:+375 (176) 77-45-63">+375 (176) 77-45-63</a><br><b>e-mail:</b> <a href="mailto:saa@ruelta.by">saa@ruelta.by</a><br><b>Skype:</b> <a href="skype:saa-mld.ruelta.ru">saa-mld.ruelta.ru</a><br></p>'
	        },{
	            iconLayout: 'default#image',
	            iconImageHref: 'templates/_ares/img/svg/yandex.svg',
	            iconImageSize: [30, 41],
	            iconImageOffset: [-15, -41]
	        });

	    myMap.geoObjects
	        .add(myPlacemark1)
	    });
	}
});

$(document).ready(function() {
	$('.tab-link').click(function(event) {
		$('.tab-class').fadeToggle('fast');
	});
});