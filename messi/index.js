
$(document).ready(function(){ // IDEA: Startar javascript

  $("#hem").show(); // IDEA: gör så att texten eller knappen syns när javascript är på

  $("#Tjänster").show(); // IDEA: gör så att texten eller knappen syns när javascript är på

  $("#Kontakt").show(); // IDEA: gör så att texten eller knappen syns när javascript är på

  $("#Meny").show(); // IDEA: gör så att texten eller knappen syns när javascript är på

  $('body').css({
'overflow': 'hidden' // IDEA: tar bort scrollen när
});

  $("nav").mouseenter(function(){ // IDEA: när musen går på navbaren så ändras nyansen
    $("nav").css({opacity:1});

  });

    $("nav").mouseleave(function(){
      $("nav").css({opacity:0.5});

    });

  $("#hem").click(function() {

    $('html, body').animate({

           scrollTop: $("#Första").offset().top-80
       }, 1000);
  });


    $("#Tjänster").click(function() {

      $('html, body').animate({
             scrollTop: $("#andra").offset().top
         }, 1000);
    });

        $("#Kontakt").click(function() {

          $('html, body').animate({
                 scrollTop: $("#tredje").offset().top-60
             }, 1000);
        });

    $("#Meny").click(function() {

      $('html, body').animate({
             scrollTop: $("#Första").offset().top-80
         }, 1000);
    });

    });
