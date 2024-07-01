const teamItems = document.querySelectorAll('.flex_team_item');

teamItems.forEach((item, index) => {
  // Добавляем обработчик события mouseover
  item.addEventListener('mouseover', function() {
    item.style.color = '#FF7373';
    // Находим соответствующую подчеркивающую линию
    const underline = item.querySelector('.flex_underline');
    if (underline) {
      underline.style.background = '#FF7373';
    }
  });

  // Добавляем обработчик события mouseout
  item.addEventListener('mouseout', function() {
    item.style.color = '#000';
    // Находим соответствующую подчеркивающую линию
    const underline = item.querySelector('.flex_underline');
    if (underline) {
      underline.style.background = '#000';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const teamItems = document.querySelectorAll('.flex_team_item');
    const infoItems = document.querySelectorAll('.main_dev_info_item');
  
    // Убедитесь, что одна карточка видна изначально
    const defaultIndex = 0; // Индекс карточки, которая будет видна по умолчанию
    if (infoItems[defaultIndex]) {
      infoItems[defaultIndex].classList.add('active');
    }
  
    teamItems.forEach((item, index) => {
      item.addEventListener('click', function() {
        // Удаляем класс active у всех карточек
        infoItems.forEach((infoItem) => {
          infoItem.classList.remove('active');
        });
  
        // Добавляем класс active к соответствующей карточке
        const infoItem = document.querySelector(`.main_dev_info_item_${index + 1}`);
        if (infoItem) {
          infoItem.classList.add('active');
        }
      });
    });
  });