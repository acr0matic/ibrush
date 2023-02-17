const feedback = document.getElementById('feedback');

if (feedback) {
  const select = feedback.querySelector('.select');
  NiceSelect.bind(select,
    {
      placeholder: 'Выберите книгу',
    }
  );
}

const sliderOffer = new Swiper('.slider-related', {
  slidesPerView: 1,
  spaceBetween: 24,

  pagination: {
    el: '.slider-related .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    480: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    }
  }
});