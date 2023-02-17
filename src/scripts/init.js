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
  slidesPerView: 3,
  spaceBetween: 24,

  pagination: {
    el: '#slider-offer .swiper-pagination',
    clickable: true,
  },
});