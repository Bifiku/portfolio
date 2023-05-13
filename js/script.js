document.addEventListener('DOMContentLoaded', () => {

  // Текст для скиллов
  // Скиллы в верхней части
  const skillsTextTop = [
    'Веб-разработка',
    'Работа с GIT',
    'Работа с Figma',
    'Адаптивная вёрстка'
  ];
  
  const skillsTextBottom = [
    'JavaScript',
    'REACT',
    'HTML/CSS (SASS/SCSS)'
  ];

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
    const cards = document.querySelectorAll('.random-rotate');
    cards.forEach(item => {
      const randomRotation = Math.floor(Math.random() * 15) - 5;
      item.style.transform = `rotate3d(0, 0, 1, ${randomRotation}deg)`;
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
      this.checkedParent();
      const div = document.createElement('div');
      div.innerHTML = `${this.text}`;
      div.classList.add('skill'); 
      div.classList.add(`skill__animation-${this.parentSelector}`);
      this.parent.append(div);
    }
  }
  new Skill('top', skillsTextTop[0]).render();
  new Skill('top', skillsTextTop[1]).render();
  new Skill('top', skillsTextTop[2]).render();
  new Skill('top', skillsTextTop[3]).render();

  new Skill('bottom', skillsTextBottom[0]).render();
  new Skill('bottom', skillsTextBottom[1]).render();
  new Skill('bottom', skillsTextBottom[2]).render();

  // Делаем ленту скиллов бесконечной
  // Функция вычесления общей ширины всех карточек со скиллами
  function calcSumWidthSkills(parentSelectorSum) {
    const parentSelector = document.querySelector(parentSelectorSum);
    const skills = parentSelector.querySelectorAll('.skill');
    let sumWidthSkills = 0;
    
    skills.forEach(skill => {
      
      const widthSkill = window.getComputedStyle(skill);

      sumWidthSkills += parseInt(widthSkill.width, 10) + parseInt(widthSkill.marginRight, 10);
    });

    return sumWidthSkills;
  }


  function checkingScreenWidrh(parentSelector){
    // Получаем видимишую ширину экрана клиента
    const visibleDisplayWidth = document.documentElement.offsetWidth * 5;
    const sumWidthSkills = calcSumWidthSkills(parentSelector);
    
    if(sumWidthSkills < visibleDisplayWidth){
      let selector = document.querySelector(parentSelector);
      let skills = selector.querySelectorAll('.skill');

      // console.log(skills);
      for (let i = 0; i < skills.length; i++){
        const newSkill = skills[i].cloneNode(true);
        let currentWidthSkills = 0;
        selector.appendChild(newSkill);
        currentWidthSkills = calcSumWidthSkills(parentSelector);
        if(visibleDisplayWidth < currentWidthSkills){
          break;
        }
      }

      checkingScreenWidrh(parentSelector);

    } 


  }
  checkingScreenWidrh('.section-third__box-skills_top');
  checkingScreenWidrh('.section-third__box-skills_bot');

  const  skills = document.querySelectorAll('.skill');

  skills.forEach((skill) => {
    skill.addEventListener('mouseover', () => {
      skill.style.transform = 'scale(1.3)';
    });
  
    skill.addEventListener('mouseout', () => {
      skill.style.transform = 'none';
    });
  });

  const cardAnimation = document.querySelectorAll('.card-animation-up');

  cardAnimation.forEach(card => {
    const p = card.querySelector('p');
    card.addEventListener('mouseover', () => {     
      p.style.transform = 'translate3d(0, 3rem, 0)'
    });
    card.addEventListener('mouseout', () => {
      p.style.transform = 'translate3d(0, 0, 0)'
    });
  });



});

