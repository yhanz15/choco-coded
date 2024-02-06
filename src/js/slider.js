   var swiper = new Swiper(".mySwiper", {
                    slidesPerView: 1,
                    spaceBetween: 18,
     loop: true,
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                  },
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                spaceBetween: 18,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 18,
            },
        },
   });