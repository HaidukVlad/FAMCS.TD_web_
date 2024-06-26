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
      element.style[style] = 'rgb(' + colorsVal[0].join(',') + ')';
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
          currentColor[i] = Math.round(val);
        }
        elements.forEach(element => {
          element.style[style] = 'rgb(' + currentColor.join(',') + ')';
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
      positions: [0, 1000],
      value: ['255,255,255', '0,0,0']
    },
    {
      elements: Array.from(navLinks),
      style: 'color',
      positions: [0, 500],
      value: ['0,0,0', '255,255,255']
    },
    {
      elements: Array.from(navLinksLast),
      style: 'color',
      positions: [0, 500],
      value: ['255,255,255', '0,0,0']
    },
    {
      elements: Array.from(navLiLast),
      style: 'background-color',
      positions: [0, 500],
      value: ['0,0,0', '255,255,255']
    }
  ]);
})();
