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
  
  gsap.to('.wide-wrap', {
    scrollTrigger: {
      trigger: '.sc-wide',
      start: 'top top',
      end: '+=3000',
      markers: true,
      scrub: 1,
      pin: true,
    },
    borderRadius: 0,
  });
  
  $('.top-menu').click(function () {
    $('aside').css('display', 'block');
  });
  
  $('.close-btn').click(function () {
    $('aside').css('display', 'none');
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
    trigger:'.introduction-wrap',
    pin:true,
    scrub:0.5,
    start:'top top',
    end:'+=1500',
    markers:true
  }
})

.addLabel('motion1')
intro.from('.sc-introduction .introduction-wrap .img-wrap01',{scale:2, xPercent:-300},'motion1')
.from('.sc-introduction .introduction-wrap .img-wrap02',{scale:2, xPercent: 300,},'motion1')
.from('.sc-introduction .introduction-wrap',{yPercent:500},'motion1')

// .from('.sc-introduction .introduction-wrap img p',{yPercent: 200},'label1')

}); // 마지막 감싸기