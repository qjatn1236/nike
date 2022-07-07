$(function(){

  /**
   * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
   *
   * @version 1.0.0
   * @since 2022-01-16
   * @author 본인이름 (Nico)
   */

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
  // 헤더 스크롤

  $('.gnb .nav-item').mouseover(function(){
    $(this).children('.sub-menu').stop().slideDown(150).addClass('active')
  })

  $('.gnb .nav-item').mouseleave(function(){
    $('.sub-menu').stop().slideUp(150).removeClass('active')
  });
  // nav 슬라이드

  gsap.to('.sc-main .bg-area img',{
    scrollTrigger:{
      trigger:'.sc-main .img-box',
      start:'top 50%',
      end:'bottom top',
      markers:true,
      scrub:1,
    },
    yPercent:-20
  });

  wideTl = gsap.timeline({
    scrollTrigger:{
      trigger:'.wide-area',
      start:'top top',
      end:'200%',
      scrub:1,
      pin:true,
    },
  });

  wideTl.addLabel('.m1')
  .to('.wide-area .wide-wrap',{
    width:'100%',
  },'m1')
  .to('.wide-area .wide-wrap',{
    'border-radius':0,
  },'m1+=0.2')
  .to('.wide-area .wide-wrap .logo-img',{
    top:'50%'
  });
  
  sampleTl = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc-product',
      start:'top 100%',
      end:'bottom top',
      scrub:1,
    },
  });

  sampleTl.addLabel('m1')
  .to('.sc-product .txt01',{
    xPercent:-100
  },'m1')
  .to('.sc-product .txt02',{
    xPercent:100
  },'m1')
  

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
.from('.sc-introduction .introduction-wrap .img-wrap03',{scale:2, yPercent: 100,},'motion1')
.from('.sc-introduction .introduction-wrap p',{yPercent: 100},'motion1')


});