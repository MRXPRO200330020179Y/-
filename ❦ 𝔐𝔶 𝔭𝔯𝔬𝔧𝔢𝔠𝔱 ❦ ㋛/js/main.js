(function($){
  $('.Events__data').each(function(){
      $(this).prop('Counter',0).animate({
          Counter:$(this).text()
      },
      {
          duration:9000,
          easing:"swing",
          step:function(now){
              $(this).text(Math.ceil(now));
          }  
     });
  })
})(jQuery);


VANTA.GLOBE({
  el: "#Fashion",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1,
  scaleMobile: 1.0,
  color: 0xff3fbb,
  color2: 0x5393cd,
  backgroundColor: 0x15153c,
});


