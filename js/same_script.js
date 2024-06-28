var scroll = function(configs) {
  // Обработка каждого элемента конфигурации
  configs.forEach(config => {
    const { elements, style, positions, value } = config;
    
    // Превращаю значение цветов в массив
    const colorsVal = [
      value[0].split(',').map(Number),
      value[1].split(',').map(Number)
    ];
    
    // Устанавливаем начальные значения стилей для элементов
    elements.forEach(element => {
      element.style[style] = 'rgba(' + colorsVal[0].join(',') + ')';
    });
  });

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    
    configs.forEach(config => {
      const { elements, style, positions, value } = config;
      
      const colorsVal = [
        value[0].split(',').map(Number),
        value[1].split(',').map(Number)
      ];
      
      const pct = Math.max(0, Math.min(1, (scrollTop - positions[0]) / (positions[1] - positions[0]))); // Ограничиваем pct от 0 до 1
      const currentColor = [];

      for (let i = 0; i < colorsVal[0].length; i++) {
        let val;
        if (colorsVal[0][i] < colorsVal[1][i]) {
          val = ((colorsVal[1][i] - colorsVal[0][i]) * pct) + colorsVal[0][i];
        } else {
          val = colorsVal[0][i] - ((colorsVal[0][i] - colorsVal[1][i]) * pct);
        }
        currentColor[i] = i < 3 ? Math.round(val) : val.toFixed(2); // Ограничиваем альфа канал до 2 знаков после запятой
      }
      
      elements.forEach(element => {
        element.style[style] = 'rgba(' + currentColor.join(',') + ')';
      });
    });
  });
};

(function() {
  const navs = document.querySelectorAll('nav');
  const navLinks = document.querySelectorAll('.nav_link');
  const navLinksLast = document.querySelectorAll('.nav_link_last');
  const navLiLast = document.querySelectorAll('.nav_li_last');
  const navContainer = document.querySelectorAll('.nav_container');

  scroll([
    {
      elements: Array.from(navs), // Преобразуем NodeList в массив
      style: 'background-color',
      positions: [0, 250],
      value: ['255,255,255,0', '0,0,0,1']
    },
    {
      elements: Array.from(navLinks),
      style: 'color',
      positions: [0, 100],
      value: ['0,0,0', '255,255,255']
    },
    {
      elements: Array.from(navLinksLast),
      style: 'color',
      positions: [0, 100],
      value: ['255,255,255', '0,0,0']
    },
    {
      elements: Array.from(navLiLast),
      style: 'background-color',
      positions: [0, 100],
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
        document.querySelector('body').style.overflow = 'visible';
      });
    }, 1000);
  }, 1000);
});