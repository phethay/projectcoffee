const navlinks = document.querySelector("#menu-open-button");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// เปิดเมนู
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});

// ปิดเมนู
menuCloseButton.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
});

const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursar: true,
    spaceBetween: 25,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpaints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
    }
});
