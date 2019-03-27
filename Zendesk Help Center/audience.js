// Define colors for search result category
$(document).ready(function() {

//Admins
 $('.breadcrumbs li a').each( function() {
if ( $(this).text() == "Administrator") {
  $(this).css({
"background":"#DD65AE",
"color" : "white",
"padding" : "2px",
"border-radius" : "5px"
});
	}
});

// LearnCore Admins
 $('.breadcrumbs li a').each( function() {
if ( $(this).text() == "CompanyOne Admin") {
  $(this).css({
"background":"#DD65AE",
"color" : "white",
"padding" : "2px",
"border-radius" : "5px"
});
	}
});


//User
$('.breadcrumbs li a').each( function() {
if ( $(this).text() == "User" || $(this).text() == "CompanyOne Learner") {
  $(this).css({
"background":"#FDC36C",
"color" : "white",
"padding" : "2px",
"border-radius" : "5px"
});
	}
});


//Developer
$('.breadcrumbs li a').each( function() {
if ( $(this).text() == "Developer Tools" ) {
  $(this).css({
"background":"#A9DAF8",
"color" : "white",
"padding" : "2px",
"border-radius" : "5px"
});
	}
});
});
