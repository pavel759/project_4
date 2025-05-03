let swiperCard = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 20,

    pagination: {
        // el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1024: {
            slidesPerView: 3
        },
        768: {
            slidesPerView: 2
        },
        425: {
            slidesPerView: 1,
             spaceBetween: 30.
        }
    }
});
