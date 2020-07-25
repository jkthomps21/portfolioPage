// Initializations
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  });

// Other Stuff
window.onload = function() {
    $("#home-page").show();
    $("#portfolio-page").hide();
    $("#contact-page").hide();
}

$(".button-home").on("click", function(){
    $("#home-page").show();
    $("#portfolio-page").hide();
    $("#contact-page").hide();
});

$(".button-portfolio").on("click", function(){
    $("#home-page").hide();
    $("#portfolio-page").show();
    $("#contact-page").hide();
});

$(".button-contact").on("click", function(){
    $("#home-page").hide();
    $("#portfolio-page").hide();
    $("#contact-page").show();
});

$(".navbar-nav>li>a").on("click", function() {
    $(".navbar-collapse").collapse("hide");
})


