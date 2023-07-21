'use strict';

(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('nav ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.nav-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.nav-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.nav-dropdown').hide();
    });
    // Toggle open and close nav styles on click
    $('#nav-toggle').click(function() {
      $('nav ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#nav-toggle').on('click', function() {
      this.classList.toggle('active');
      $(this).toggleClass("open");
      $(".navbar").toggleClass("sp_open");
    });
  }); // end DOM ready
})(jQuery); // end jQuery

const mql = window.matchMedia("(max-width: 800px)");
const nav = document.getElementById("nav-mobile");
mql.addListener(removeTransition);

console.log(nav);

function openMenu(){

  nav.classList.add('activated');
}

function removeTransition(e){
	// e -> is the event object
	// e.matches -> stores a true false
	// value depending if the media query
	// list set above matches or not
	if(e.matches){
		nav.classList.remove('activated');
	}
}