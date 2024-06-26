document.addEventListener('DOMContentLoaded', function() {
  const mainCarousel = document.getElementById('mainCarousel');

  const slides = [
    { title: 'Мощная и опасная деревянная башня с дуплом, из которого вылетают вооруженные орлы.', imgSrc: 'img/second_tower.png' },
    { title: 'Средневековая башня, рыцари который не знают слова "человечность".', imgSrc: 'img/third_tower.png' },
    { title: 'Невообразимо дорогая и древняя Нефритовая башня, использующая древнюю магию.', imgSrc: 'img/first_tower.png' },
    { title: 'Французская агрессия не имеет границ. Именно поэтому Эйфелева башня стала боевой.', imgSrc: 'img/fourth_tower.png' }

  ];

  const wrapper = document.createElement('div');
  wrapper.classList.add('main_carousel_wrapper');
  mainCarousel.appendChild(wrapper);

  slides.forEach((slide) => {
    const slideElement = document.createElement('div');
    slideElement.classList.add('main_carousel_item');
    
    slideElement.innerHTML = `
      <h3>${slide.title}</h3>
      <img src="${slide.imgSrc}" alt="${slide.title}">
    `;
    wrapper.appendChild(slideElement);
  });

  // Клонируем первые три слайда и добавляем их в конец
  for (let i = 0; i < 3; i++) {
    const clone = wrapper.children[i].cloneNode(true);
    wrapper.appendChild(clone);
  }

  let currentIndex = 0;
  const totalSlides = slides.length;
  const slidesToShow = 3;
  const slideWidth = wrapper.children[0].offsetWidth + 20; // ширина слайда + отступ

  function showNextSlide() {
    currentIndex++;
    wrapper.style.transition = 'transform 1s ease';
    wrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

    // Если дошли до клонированных слайдов, возвращаемся к началу
    if (currentIndex === totalSlides) {
      setTimeout(() => {
        wrapper.style.transition = 'none';
        wrapper.style.transform = 'translateX(0)';
        currentIndex = 0;
      }, 1000); // Задержка должна совпадать с transition времени
    }
  }

  setInterval(showNextSlide, 3200); // Меняем слайды каждые 3.2 секунды 
});

document.getElementById('main_info_phone_text').addEventListener('click', function() {
  navigator.clipboard.writeText("+375 29 162 4146").then(function() {
    const copiedElement = document.getElementById('coppied');

    // Показать элемент с плавным переходом
    copiedElement.style.display = 'block';
    copiedElement.style.opacity = '0';
    copiedElement.style.transition = 'opacity 0.5s';
    setTimeout(function() {
      copiedElement.style.opacity = '1';
    }, 10); // Небольшая задержка для начала перехода

    // Скрыть элемент с плавным переходом
    setTimeout(function() {
      copiedElement.style.opacity = '0';
      setTimeout(function() {
        copiedElement.style.display = 'none';
      }, 500); // Время должно совпадать с временем transition
    }, 2000); // Время задержки перед началом скрытия
  });
});
document.getElementById('main_info_mail_text').addEventListener('click', function() {
  navigator.clipboard.writeText("lolly1bomb2@gmail.com").then(function() {
    const copiedElement = document.getElementById('coppied');

    // Показать элемент с плавным переходом
    copiedElement.style.display = 'block';
    copiedElement.style.opacity = '0';
    copiedElement.style.transition = 'opacity 0.5s';
    setTimeout(function() {
      copiedElement.style.opacity = '1';
    }, 10); // Небольшая задержка для начала перехода

    // Скрыть элемент с плавным переходом
    setTimeout(function() {
      copiedElement.style.opacity = '0';
      setTimeout(function() {
        copiedElement.style.display = 'none';
      }, 500); // Время должно совпадать с временем transition
    }, 2000); // Время задержки перед началом скрытия
  });
})

document.getElementById('main_info_address_text').addEventListener('click', function() {
  navigator.clipboard.writeText("BSU FAMCS Nezavisimosti av. 4").then(function() {
    const copiedElement = document.getElementById('coppied');

    // Показать элемент с плавным переходом
    copiedElement.style.display = 'block';
    copiedElement.style.opacity = '0';
    copiedElement.style.transition = 'opacity 0.5s';
    setTimeout(function() {
      copiedElement.style.opacity = '1';
    }, 10); // Небольшая задержка для начала перехода

    // Скрыть элемент с плавным переходом 
    setTimeout(function() {
      copiedElement.style.opacity = '0';
      setTimeout(function() {
        copiedElement.style.display = 'none';
      }, 500); // Время должно совпадать с временем transition
    }, 2000); // Время задержки перед началом скрытия
  });
})