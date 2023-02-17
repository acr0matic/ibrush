const feedback = document.getElementById('feedback');

if (feedback) {
  const select = feedback.querySelector('.select');
  NiceSelect.bind(select,
    {
      placeholder: 'Выберите книгу',
    }
  );
}