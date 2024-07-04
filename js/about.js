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

  document.querySelector('.p_inst_1').addEventListener('click', function() {
    window.open("https://www.instagram.com/meat._.dumpling/", '_blank');
  })

  document.querySelector('.p_inst_2').addEventListener('click', function() {
    window.open("https://www.instagram.com/viselogya/", '_blank');
  })

  document.querySelector('.p_inst_3').addEventListener('click', function() {
    window.open("https://www.instagram.com/_.ilya.03.08._?igsh=MWZjMGdoN3NqdWdwcA==", '_blank');
  })


  document.querySelector('.p_tg_1').addEventListener('click', function() {
    window.open("https://t.me/dgv_sb", '_blank');
  })

  document.querySelector('.p_tg_2').addEventListener('click', function() {
    window.open("https://t.me/viselogya", '_blank');
  })

  document.querySelector('.p_tg_3').addEventListener('click', function() {
    window.open("https://t.me/ilya_fizik", '_blank');
  })


  document.querySelector('.p_mail_1').addEventListener('click', function() {
    window.open("mailto:lolly1bomb2@gmail.com", '_blank');
  });

  document.querySelector('.p_mail_2').addEventListener('click', function() {
    window.open("mailto:4205353@gmail.com", '_blank');
  });

  document.querySelector('.p_mail_3').addEventListener('click', function() {
    window.open("mailto:ilya.chvarkov0903@gmail.com", '_blank');
  });

