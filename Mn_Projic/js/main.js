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


$(document).ready(function(){
  $('.burger__start').click(function(){
    $('.header__nav__mrx').fadeTo(500, 1)
    $('.header__nav__mrx').css('display','block')
    $('.burger__end').css('display','block')
    $('.burger__start').css('display','none')
  })
});

$(document).ready(function(){
  $('.burger__end').click(function(){
    $('.header__nav__mrx').fadeTo(500, 1)
    $('.header__nav__mrx').css('display','none')
    $('.burger__end').css('display','none')
    $('.burger__start').css('display','block')
  })
});


if (mobileVersion) {
  mobileVersion.addEventListener("click", () => {
      const newWin = window.open("/", "example", "width=480px,height=600px");
      newWin.onload = function () {
          let div = newWin.document.createElement("div"),
              body = newWin.document.body;
          body.insertBefore(div, body.firstChild);
      };
  });
}