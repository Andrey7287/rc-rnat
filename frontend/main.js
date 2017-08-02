'use strict';

/* Make jQuery available in global */
console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

/* Import project styles and components */
require('script-loader!slick-carousel');
require('script-loader!wowjs');
import 'es6-promise/auto';
import './modules/ymap';
import '../sass/css.scss';
import OnResize from './modules/resize';
import scrollup from './modules/scrollup';
new WOW().init();
/* Define project components and variables */
var	mobileView = window.matchMedia("(max-width: 768px)").matches,
		resizeAlign = new OnResize(),
		scrollTiming = 0;

/*********************************
****** Menu expand on focus ******
**********************************/
$('.dropdown__link').focusin(function(){
	$(this).closest('.dropdown').css('transform', 'scale(1)');
});
$('.dropdown__link').focusout(function(){
	$(this).closest('.dropdown').css('transform', 'scale(0)');
});

/************************
****** Mobile menu ******
*************************/

$('.c-hamburger').on('click', function(){
	$(this).toggleClass('is-active');
	//$('.site-nav').slideToggle();
	$('.site-nav').toggleClass('act');
});


/***********************
******** SLIDER ********
************************/

$('.js-slider-1').slick({
	//prevArrow: $('.js-slider-1-left'),
	//nextArrow: $('.js-slider-1-right'),
	arrows: false,
	dots: true,
	fade: true,
	appendDots: $('.js-slider-1-dots')
});

/***************************
******** Directions ********
****************************/

$('.directions').on('click', '.directions__link', function(e){

	e.preventDefault();

	$(this).sibling

});

/************************
******* Scroll Up *******
*************************/

$(document).scroll(function(){

	if ( !scrollTiming ) {

		scrollTiming = setTimeout(function(){

			var scroll = $('body').scrollTop() ? $('body').scrollTop() : $('html').scrollTop();
			scroll >= 300 ? $('.scrollup').addClass('act') : $('.scrollup').removeClass('act');
			scrollTiming = 0;

		},300);

	}

});

$('.scrollup').scrollUp();
