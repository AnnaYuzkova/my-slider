new Swiper(".image-slider", {
  // Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Навигация
  pagination: {
    el: ".swiper-pagination",
    // Буллеты
    clickable: true,
    // Динамические буллеты
    dynamicBullets: true,
  },
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  //   draggable: true,
  // },

  simulateTouch: true,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,

  // Управление клавиатурой
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  // Управление колесом мыши
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".image-slider",
  },

  // Количество слайдов для показа
  slidesPerView: 3,

  spaceBetween: 30,

  freeMode: true,

  // Автопрокрутка
  autoplay: {
    delay: 1000,
    stopOnLastSlide: true,
    disableOnInteraction: false,
  },

  speed: 800,

  // effect: 'flip',
  // flipEffect: {
  //   slideShadows: true,
  //   limitRotation: true
  // },
});
