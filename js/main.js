var swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  mousewheel: true,
});

$(function(){

  last = 0
  $(window).scroll(function(){
    curr = $(this).scrollTop();

    if (curr > last) {
      $('header').addClass('active')
    } else {
      $('header').removeClass('active') 
    }

    last = curr;
  })



  $('.depth1').click(function(e){
    e.preventDefault();

    if ($(this).siblings('.sub').css('display') == 'block') {
        $(this).siblings('.sub').stop().slideUp();
    } else {
        $('.sub').stop().slideUp();
        $(this).siblings().stop().slideDown();
    }

})

  $('.nav > li').mouseover(function(){
    $(this).children('.sub-menu').css({"opacity":"1","visibility":"visible","transform":"scaleY(1)"})
  })
  $('.nav > li').mouseleave(function(){
    $(this).children('.sub-menu').css({"opacity":"0","visibility":"hidden","transform":"scaleY(0)"})
  })

  
  gsap.to('.wide-wrap', {
    scrollTrigger: {
      trigger: '.sc-wide',
      start: 'top top',
      end: '+=3000',
      // markers: true,
      scrub: 1,
      pin: true,
    },
    borderRadius: 0,
  });
  
  var $sections = document.querySelectorAll('.horizon_box');
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#sc-scroll',
      pin: true,
      scrub: 0.3,
      start: 'top top',
      end: '+=1000%',
    },
  });
  
  tl.from($sections, {
    x: '300%',
    autoAlpha: 0,
    duration: 2,
    ease: 'none',
    stagger: 3,
  }).to($sections, { duration: 3 });
  

// introduction

const intro = gsap.timeline({
  scrollTrigger:{
    trigger:'.introduction-area',
    pin:true,
    scrub:0.5,
    start:'top top',
    end:'+=4000',
    // markers:true
  }
})

.addLabel('motion1')
intro.from('.sc-introduction .introduction-wrap .img-wrap01',{scale:2, xPercent:-300},'motion1')
.from('.sc-introduction .introduction-wrap .img-wrap02',{scale:2, xPercent: 300,},'motion1')
.from('.sc-introduction .introduction-wrap .img-wrap03',{scale:2, yPercent: 20,},'motion1')
.from('.sc-introduction .introduction-wrap p',{yPercent: 100},'motion1')


}); // 마지막 감싸기