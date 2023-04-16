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
