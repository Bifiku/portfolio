document.addEventListener('DOMContentLoaded', () => {

  const form = document.getElementById('my-form');
  const url = 'https://formspree.io/f/xpzeogqv';

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name.value,
        _replyto: form.email.value,
        message: form.message.value
      })
    })
    .then(response => {
      if (response.ok) {
        alert('Ваше сообщение было успешно отправлено.');
        form.reset();
      } else {
        throw new Error('Произошла ошибка при отправке сообщения.');
      }
    })
    .catch(error => {
      alert(error.message);
    });
  });

  // Анимация при наведении на nav-menu (скейл + рандомное вращение)
  const items = document.querySelectorAll('li');

  items.forEach((item, count) => {
    if(count < (items.length - 1)){
      item.addEventListener('mouseover', () => {
        const randomRotation = Math.floor(Math.random() * 15) - 5;
        item.style.transform = `scale(1.2) rotate(${randomRotation}deg)`;
      });
      item.addEventListener('mouseout', () => {
        item.style.transform = `scale(1) rotate(0)`;
      });
    }
  });

  
  // Рандомное вращение карточек (card__card)
  function rotateCards() {
    const cards = document.querySelectorAll('.card__card');
    cards.forEach(item => {
      const randomRotation = (Math.random() * 15) - 5;
      item.style.transform = `rotate(${randomRotation}deg)`;
    });
    setTimeout(rotateCards, 1000);

  }

  rotateCards();

  // Кнопка с карточками
  const btnCircle = document.querySelector('.btn_circle'),
        cardCircle = document.querySelectorAll('.card__circle');

  btnCircle.addEventListener('click', () => {
    cardCircle.forEach((item, index) => {
      setTimeout(() => {
        item.classList.toggle('hide');}, index * 100
      );
    });
  });
});

