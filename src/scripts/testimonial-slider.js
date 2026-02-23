import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export function initTestimonials() {
  new Swiper('.testimonial-swiper', {
    modules: [Navigation, Autoplay],
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    navigation: {
  nextEl: '.swiper-button-prev',
  prevEl: '.swiper-button-next',
},

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}
