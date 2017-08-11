'use strict';

/* Make jQuery available in global */
console.log(`jQuery ${$.fn.jquery} is loaded`);
window.$ = $;
window.jQuery = $;

/* Import project styles and components */
require('script-loader!slick-carousel');
require('script-loader!wowjs');
require('jquery-colorbox');
import 'es6-promise/auto';
import './modules/gmap';
import '../sass/css.scss';
import OnResize from './modules/resize';
import scrollup from './modules/scrollup';
import customSelect from 'custom-select';
new WOW().init();
customSelect('select');
/* Define project components and variables */
var	mobileView = window.matchMedia("(max-width: 992px)").matches,
		resizeAlign = new OnResize(),
		scrollTiming = 0;


$('.lightbox').colorbox({
	rel:'gal',
	width:'85%',
	height:'85%'
});

var $searchBtn = $('.search__submit'),
		$searchForm = $searchBtn.closest('form'),
		$searchInput = $searchForm.find('.search__input'),
		$searchContainer = $searchBtn.closest('.top__item');

$searchInput.focusin(function () {
	$searchContainer.addClass('with-bkg');
	if ( mobileView ) {
		$searchContainer.addClass('mob-open');
	}
});
$searchInput.focusout(function (e) {
	if ( e.relatedTarget !== $searchBtn[0] ) {
		$searchContainer.removeClass('mob-open');
		$searchContainer.removeClass('with-bkg');
	}
});
$searchBtn.focusout(function(){
	$searchContainer.removeClass('mob-open');
	$searchContainer.removeClass('with-bkg');
});

if ( mobileView ) {
/************************
****** Mobile menu ******
*************************/

	$('.c-hamburger').on('click', function(){
		$(this).toggleClass('is-active');
		//$('.site-nav').slideToggle();
		$('.site-nav').toggleClass('act');
	});

/**************************
****** Mobile search ******
***************************/

	$searchBtn.click(function (e) {
		e.preventDefault();

		if ( $searchContainer.hasClass('mob-open') ) $searchForm.submit();

		$searchContainer.addClass('mob-open');
		$searchInput.focus();
	});

} else {
/*********************************
****** Menu expand on focus ******
**********************************/

	$('.dropdown__link').focusin(function(){
		$(this).closest('.dropdown').css('transform', 'scale(1)');
	});
	$('.dropdown__link').focusout(function(){
		$(this).closest('.dropdown').css('transform', 'scale(0)');
	});
}

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
