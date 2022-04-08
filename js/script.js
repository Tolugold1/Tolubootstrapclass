$(document).ready(function (){
  $('#menu').carousel({interval: 2000});
  $('#carouselButton').click(function(){
      if ($('#carouselButton').children('span').hasClass('fa-pause')) {
          $('#menu').carousel('pause');
          $('#carouselButton').children('span').removeClass('fa-pause');
          $('#carouselButton').children('span').addClass('fa-play');
      } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
          $('#menu').carousel('cycle');
          $('#carouselButton').children('span').removeClass('fa-play');
          $('#carouselButton').children('span').addClass('fa-pause');
      }   
  });

  $('#loginModal1').click(function(){
      $("#loginModal").modal("toggle");
  });

  $('#reservemodal').click(function(){
      $('#reserve').modal('toggle');
  });
});