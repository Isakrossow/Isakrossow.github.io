
$(document).ready(function(){

  $("#Kardio").click(function() {

    $('html, body').animate({

      scrollTop: $("#Första").offset().top-80
    }, 1000);
  });

  jQuery('body').css('overflow','hidden')

  $('#träning').click(function() {

    location.reload();

  });

  $("#Kost").click(function() {

    $('html, body').animate({
      scrollTop: $("#tredje").offset().top
    }, 1000);
  });

  $("#Styrketräning").click(function() {

    $('html, body').animate({
      scrollTop: $("#andra").offset().top-60
    }, 1000);
  });

  $("nav").mouseenter(function(){
    $("nav").css({opacity:1})

  });

  $("#Meny").click(function() {

    $('html, body').animate({
      scrollTop: $("#Första").offset().top-80
    }, 1000);
  });

  $("nav").mouseenter(function(){ 
    $("nav").css({opacity:1});

  });

    $("nav").mouseleave(function(){
      $("nav").css({opacity:0.5});

    });

  $("#Kardio").show();

  $("#Styrketräning").show();

  $("#Kost").show();

  $("#träning").show();

});
