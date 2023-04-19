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

const items = document.querySelectorAll('li');

items.forEach((item, count) => {
  if(count < (items.length - 1)){
    item.addEventListener('mouseover', () => {
      const randomRotation = Math.floor(Math.random() * 15) - 10;
      item.style.transform = `scale(1.1) rotate(${randomRotation}deg)`;
    });
    item.addEventListener('mouseout', () => {
      item.style.transform = `scale(1) rotate(0)`;
    });
  }
});
