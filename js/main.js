// acardeon-menu
// $(document).ready(function(){

//     $('.ac > li > div').click(function(){
// if ($(this).next().is(':hidden') ){
//     $('.ac ul').slideUp();
// }
// $(this).next().slideToggle();
//     });
// $('.ac ul:eq(0)').show();
//     });
// scroll-to-top
// $(window).scroll(function(){
// if ($(this).scrollTop() >=50){
//     $('#sc').fadeIn();
// }
// else{$('#sc').fadeOut();}

//     });

// $('#sc').click(function(){
// $('body,html').animate({scrollTop:0},1000)
// });

// فرم بازشو

// $(document).ready(function(){
// $('.cl').click(function(){
// $('.form').fadeIn();
// $('.op').fadeIn();
// });
// $('#close , .op').click(function(){
//     $('.form').fadeOut();
//     $('.op').fadeOut();
// });
// });
$(document).ready(function(){
$('#c').click(function(){
$('.but').before(" <div class='form'><input type='text' class='input' placeholder='ســابقه خــود راوارد نمایید'></div>")
});
}) ;  
