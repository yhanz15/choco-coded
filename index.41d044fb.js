(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu");if(!e)return;const o=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")};t.addEventListener("click",o),n.addEventListener("click",o)})(),(()=>{const e={openModalBtn:document.querySelectorAll("[data-modal-open]"),closeModalBtn:document.querySelectorAll("[data-modal-close]")};function t(e){var t=e.currentTarget.getAttribute("data-modal-open")||e.currentTarget.getAttribute("data-modal-close");t&&document.querySelector(`[data-modal="${t}"]`).classList.toggle("is-hidden")}e.openModalBtn.forEach((function(e){e.addEventListener("click",t)})),e.closeModalBtn.forEach((function(e){e.addEventListener("click",t)}))})(),document.querySelector(".scrolldown-btn").addEventListener("click",(function(e){var t,n,o,i;t=document.scrollingElement.scrollHeight,n=1e4,o=window.pageYOffset,i=null,null==n&&(n=500),t=+t,n=+n,window.requestAnimationFrame((function e(l){var r=l-(i=i||l);o<t?window.scrollTo(0,(t-o)*r/n+o):window.scrollTo(0,o-(o-t)*r/n),r<n?window.requestAnimationFrame(e):window.scrollTo(0,t)}))}));new Swiper(".mySwiper",{slidesPerView:1,spaceBetween:18,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2.5,spaceBetween:18},1200:{slidesPerView:4,spaceBetween:18}}}),new Swiper(".swiper-loved",{slidesPerView:1,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1200:{slidesPerView:3,spaceBetween:28}}});
//# sourceMappingURL=index.41d044fb.js.map
