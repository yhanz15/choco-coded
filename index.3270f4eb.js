!function(){var e=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),o=document.body,c=function(){var t="true"===n.getAttribute("aria-expanded")||!1;n.setAttribute("aria-expanded",!t),e.classList.toggle("is-open"),e.classList.contains("is-open")?o.style.overflow="hidden":d()};function d(){o.style.removeProperty("overflow")}n.addEventListener("click",c),t.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(t){t.matches&&(e.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),d())}))}(),function(){var e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function n(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",n),e.closeModalBtn.addEventListener("click",n)}(),document.querySelector(".scroll-btn").addEventListener("click",(function(e){var n,t,o,c;n=document.scrollingElement.scrollHeight,t=1e3,o=window.pageYOffset,c=null,null==t&&(t=500),n=+n,t=+t,window.requestAnimationFrame((function e(d){var i=d-(c=c||d);o<n?window.scrollTo(0,(n-o)*i/t+o):window.scrollTo(0,o-(o-n)*i/t),i<t?window.requestAnimationFrame(e):window.scrollTo(0,n)}))}));
//# sourceMappingURL=index.3270f4eb.js.map