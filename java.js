$(window).ready(function(){ /*starta*/
  $('#ButtonStartKaffe').click(function(){ /* När knappen trycks kör */
    $('html,body').animate({
      scrollTop:$("#OmKaffe").offset().top}, 1500); /* scrolla till OmKaffe */
    });
    $('#ButtonOmKaffe').click(function(){ 
      $('html,body').animate({
        scrollTop:$("#RekomendationKaffe").offset().top}, 2500);
    });
    $('#buttonKaffeHyper').click(function(){
      $('html,body').animate({
        scrollTop:$("#kaffehyper").offset().top}, 2500);
    });
    $('#buttonKaffenormalen').click(function(){
      $('html,body').animate({
        scrollTop:$("#kaffenormalen").offset().top}, 2500);
    });
    $('#buttonKaffetrött').click(function(){
      $('html,body').animate({
        scrollTop:$("#kaffetrött").offset().top}, 2500);
    });
  });
