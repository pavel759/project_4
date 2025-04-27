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
        577: {
            slidesPerView: 2
        },
        769: {
            slidesPerView: 3
        }
    }

});