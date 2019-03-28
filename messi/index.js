
$(document).ready(function(){

  $("#hem").show();

  $("#Tjänster").show();

  $("#Kontakt").show();

  $("#Meny").show();

  $('body').css({
'overflow': 'hidden'
});

  $("nav").mouseenter(function(){
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

        $("nav").mouseenter(function(){
          $("nav").css({opacity:1})

         });

    $("#Meny").click(function() {

      $('html, body').animate({
             scrollTop: $("#Första").offset().top-80
         }, 1000);
    });

    });
