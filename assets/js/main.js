const listImage = document.querySelector('.list-images');
const imgs = document.querySelectorAll('.list-images img');
const length = imgs.length;
let current = 0;

function showCurrentImage() {
    imgs.forEach(img => {
        img.style.display = 'none';  
    });
    imgs[current].style.display = 'block';  
}
setInterval(() => {
    current++; 
    if (current === length) {
        current = 0; 
    }
    showCurrentImage();
}, 3000); 

showCurrentImage();




new Swiper('.sale-card-container', {

    loop: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 4
        }
    }
});

var swiper2 = new Swiper2(".mySwiper", {
    slidesPerView: 3,
    grid: {
        rows: 2,
    },
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});