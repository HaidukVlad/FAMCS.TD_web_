var scroll = function(configs) {
  // Обработка каждого элемента конфигурации
  configs.forEach(config => {
    const { elements, style, positions, value } = config;
    
    // Превращаю значение цветов в массив
    const colorsVal = [
      value[0].split(',').map(Number),
      value[1].split(',').map(Number)
    ];
    
    elements.forEach(element => {
      element.style[style] = 'rgba(' + colorsVal[0].join(',') + ')';
    });
  });

  window.onscroll = function() {
    configs.forEach(config => {
      const { elements, style, positions, value } = config;
      
      const colorsVal = [
        value[0].split(',').map(Number),
        value[1].split(',').map(Number)
      ];
      
      const scrollTop = window.pageYOffset;
      const pct = (scrollTop - positions[0]) / (positions[1] - positions[0]);
      const currentColor = [];
      
      if (scrollTop <= positions[1] && scrollTop >= positions[0]) {
        for (let i = 0; i < colorsVal[0].length; i++) {
          let val;
          if (colorsVal[0][i] < colorsVal[1][i]) {
            val = ((colorsVal[1][i] - colorsVal[0][i]) * pct) + colorsVal[0][i];
          } else {
            val = colorsVal[0][i] - ((colorsVal[0][i] - colorsVal[1][i]) * pct);
          }
          currentColor[i] = i < 3 ? Math.round(val) : val;
        }
        elements.forEach(element => {
          element.style[style] = 'rgba(' + currentColor.join(',') + ')';
        });
      }
    });
  };
};

(function() {
  const navs = document.querySelectorAll('nav');
  const navLinks = document.querySelectorAll('.nav_link');
  const navLinksLast = document.querySelectorAll('.nav_link_last');
  const navLiLast = document.querySelectorAll('.nav_li_last');
  const navContainer = document.querySelectorAll('.nav_container')
  
  scroll([
    {
      elements: Array.from(navs), // Преобразуем NodeList в массив
      style: 'background-color',
      positions: [0, 500],
      value: ['255,255,255,0', '0,0,0,1']
    },
    {
      elements: Array.from(navLinks),
      style: 'color',
      positions: [0, 250],
      value: ['0,0,0', '255,255,255']
    },
    {
      elements: Array.from(navLinksLast),
      style: 'color',
      positions: [0, 250],
      value: ['255,255,255', '0,0,0']
    },
    {
      elements: Array.from(navLiLast),
      style: 'background-color',
      positions: [0, 250],
      value: ['0,0,0', '255,255,255']
    }
  ]);
})();

document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const loadBoxes = document.querySelectorAll('.load_box');
    loadBoxes.forEach(function(box) {
      box.style.opacity = '0';
      box.style.transition = 'opacity 1s ease';
    });

    setTimeout(function() {
      loadBoxes.forEach(function(box) {
        box.style.display = 'none';
        document.querySelector('body').style.overflow = 'visible'
      });
    }, 1500);
  }, 1500);
});

// carousel


// const mainCarousel = document.querySelector('.main_carousel');

// mainCarousel.innerHTML = 
//   `<div class="main_carousel_item">
//     <h3>Vasya</h3>
//     <img src="" alt="">
//   </div>`;

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

  setInterval(showNextSlide, 4000); // Меняем слайды каждые 3 секунды 
});
