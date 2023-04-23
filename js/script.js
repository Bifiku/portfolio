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


  // Создание карточек Скиллов
  class Skill{
    constructor(parentSelector, text, rotate, bg) {
      this.text = text;
      this.rotate = rotate;
      this.bg = bg;
      this.parentSelector = parentSelector;
      this.parent = null;
    }

    checkedParent() {
      if(this.parentSelector === 'top') {
        this.parent = document.querySelector('.section-third__box-skills_top');
      }
      if(this.parentSelector === 'bottom') {
        this.parent = document.querySelector('.section-third__box-skills_bot');
      }
      return this.parent;
    }

    render() {
      this.checkedParent()
      const div = document.createElement('div');
      div.innerHTML = `${this.text}`;
      div.classList.add('skill');
      this.parent.append(div);
    }
  }
  new Skill('top', 'Веб-разработка').render();
  new Skill('top', 'Video Production').render();
  new Skill('top', 'Оптимизация конверсий').render();
  new Skill('top', 'Управление репутацией').render();

  new Skill('bottom', 'Реклама').render();
  new Skill('bottom', 'Стратегия бренда').render();
  new Skill('bottom', 'Поисковая оптимизация').render();

  // Делаем ленту скиллов бесконечной
  const tape = document.querySelector('.section-third__box-skills_top');

  function displayCards() {
    const tapeChildren = tape.children; // Получаем дочерние элементы блока со скиллами
    let tapeChildrenWidth = 0; // ширина всех дочерних блоков
    const visibleDisplay = Math.floor(document.documentElement.offsetWidth)

    function calcDisplayWidth(){
      for(let i = 0; i < tapeChildren.length; i++){
        tapeChildrenWidth += parseFloat(getComputedStyle(tapeChildren[i]).width) + parseFloat(getComputedStyle(tapeChildren[i]).getPropertyValue('margin-right'));

        if(tapeChildrenWidth < visibleDisplay){
          tape.append(tapeChildren[i].cloneNode(true));
        }

        if(tapeChildren[i].getBoundingClientRect().left < 0 || tapeChildren[i].getBoundingClientRect().right > visibleDisplay){
          console.log(tapeChildren[i])
          tapeChildren[i].remove();
          
        }
      }
    } 
    calcDisplayWidth();

    
  }

  displayCards();
  







});

