var swiper = new Swiper('.mySwiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  freeMode: true,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  mousewheel: true,
});

gsap.to('.wide-wrap', {
  scrollTrigger: {
    trigger: '.wide',
    start: 'top top',
    end: 'bottom top',
    markers: true,
    scrub: 1,
    pin: true,
  },
  borderRadius: 0,
});
