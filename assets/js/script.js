  // Nav Header
  window.onscroll = checkNavClassNameHeaderType;
  window.onload = checkNavClassNameHeaderType;

  function checkNavClassNameHeaderType(){
      if(document.getElementsByTagName("html")[0].scrollTop > 0){
          $("nav").addClass("nonTopNav");
      }else{
          $("nav").removeClass("nonTopNav");;
      }
  }

  // Mobile Nav Menu
  $("nav button.menuButton").on("click",function(){
      $("body").toggleClass("activeNavLinks");
  });

  // Scroll Link 
  $(".scrollLink").on("click",function(){
      $("body").removeClass("activeNavLinks");
      var scrollTo = this.getAttribute("scrolllink");
      if(window.innerWidth <= 500){
          $('html, body').animate({scrollTop: $(scrollTo).offset().top - 65}, 600,'easeInOutExpo');
      }else{
          $('html, body').animate({scrollTop: $(scrollTo).offset().top - 50}, 600,'easeInOutExpo');
      }
  });



var images=new Array('assets/img/slideImage1.jpg','assets/img/slideImage2.jpg','assets/img/slideImage3.jpg', 'assets/img/slideImage4.jpg','assets/img/slideImage5.jpg','assets/img/slideImage6.jpg');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    $('header')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(700,function(){
        setTimeout(doSlideshow,3000);
    });
}



