const form = document.querySelector('form');
const formUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSc1p58KEkdMlWTAEosR9yTFdk6r2wn5bDfUtiW821WzWguu8w/viewform?usp=sf_link'; // Замените ссылку на ссылку на вашу форму

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  fetch(formUrl, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      // Добавьте код, который выполнится при успешной отправке формы
    } else {
      // Добавьте код, который выполнится при неудачной отправке формы
    }
  })
  .catch(error => {
    // Добавьте код, который выполнится при ошибке отправки формы
  });
});
