const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        900: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        320: {
            slidesPerView: 1,
        }
      }
    

});