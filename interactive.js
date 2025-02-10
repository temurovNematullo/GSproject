document.addEventListener("DOMContentLoaded", function () {
    const details = document.querySelectorAll(".accordeon_item");

    // Открываем первый <details> по умолчанию
    if (details.length > 0) {
        details[0].open = true;
    }

    details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", function () {
            details.forEach((detail) => {
                if (detail !== targetDetail) {
                    detail.removeAttribute("open");
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".header_menu");

  menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active"); // Добавляем или убираем класс
  });
});


// 1. Массив объектов с данными о товарах
const products = [
    {
      image: '/img/productcard (1).svg',
      title: 'Вариативный замок Golden Soft для отеля.',
      newPrice: '7 000',
      oldPrice: '8 000',
      status: 'Нет в наличии',
      available: false,
      isGift: true,
    },
    {
      image: '/img/productcard (2).svg',
      title: 'Вариативный замок Golden Soft для отеля.',
      newPrice: '5 500',
      oldPrice: '',
      status: 'В наличии',
      available: true,
      isGift: false,
    },
    {
      image: '/img/productcard (3).svg',
      title: 'Дверной замок Golden Soft для отеля.',
      newPrice: '15 000',
      oldPrice: '',
      status: 'В наличии',
      available: true,
      isGift: false,

    },
   
    {
        image: '/img/productcard (4).svg',
        title: 'Дверной замок Golden Soft для отеля.',
        newPrice: '15 000',
        oldPrice: '',
        status: 'Нет в наличии',
        available: false,
        isGift: true,
  
      },
   
      {
          image: '/img/productcard (4).svg',
          title: 'Дверной замок Golden Soft для отеля.',
          newPrice: '15 000',
          oldPrice: '',
          status: 'Нет в наличии',
          available: false,
          isGift: true,
    
        },
   
        {
            image: '/img/productcard (4).svg',
            title: 'Дверной замок Golden Soft для отеля.',
            newPrice: '15 000',
            oldPrice: '',
            status: 'Нет в наличии',
            available: false,
            isGift: true,
      
          },
   
          {
              image: '/img/productcard (4).svg',
              title: 'Дверной замок Golden Soft для отеля.',
              newPrice: '15 000',
              oldPrice: '',
              status: 'Нет в наличии',
              available: false,
              isGift: true,
        
            }
  


  ];

  const container = document.getElementById('productCards');

  // 3. Проходимся по каждому товару в массиве и создаем HTML для карточки
  products.forEach(product => {
    // Создаем новый элемент <li>
    const li = document.createElement('li');
    // Добавляем ему класс для стилизации
    li.className = 'product-card';

    // Используем шаблонную строку для вставки HTML с данными товара
    li.innerHTML = `
      <!-- Верхняя часть с метками -->
      <div class="product-card__labels">
       <img src="${product.available ? '/img/have.svg' : '/img/donthave.svg'}" alt="${product.available ? 'В наличии' : 'Нет в наличии'}">
        <span class="product-card__status">${product.status}</span>
        <span class="product-card__sale">sale</span>
      </div>
      
      <!-- Если товар с подарком, выводим блок с иконкой подарка -->
      ${product.isGift ? `
        <div class="product-card__gift">
          <img src="/img/podaroc.svg" alt="Подарок">
          <span>Подарок</span>
        </div>
      ` :''}

      <!-- Изображение товара -->
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.title}">
      </div>
      
      <!-- Описание товара -->
      <div class="product-card__info">
        <p class="product-card__title">${product.title}</p>
        <div class="product-card__price">
          <span class="product-card__new-price">${product.newPrice}₽</span>
          ${product.oldPrice ? `<span class="product-card__old-price">${product.oldPrice}</span>` : ''}
        </div>
      </div>
    `;

    // Добавляем созданную карточку в контейнер
    container.appendChild(li);
  });



   // Выбираем кнопки по их классам
   const btnLeft = document.querySelector(".productcard-left");
   const btnRight = document.querySelector(".productcard-right");
 
   const scrollAmount = 300; // Количество пикселей для прокрутки
 
   // Обработчик для кнопки "←"
   btnLeft.addEventListener("click", function () {
     container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
   });
 
   // Обработчик для кнопки "→"
   btnRight.addEventListener("click", function () {
     container.scrollBy({ left: scrollAmount, behavior: "smooth" });
   });
 


  

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("headerContainer");
  if (!container) return; // Если контейнера нет — прекращаем выполнение

  fetch("./header.html")
      .then(response => response.text())
      .then(data => {
          container.innerHTML = data;
      })
      .catch(error => console.error("Ошибка загрузки футера:", error));
});


document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("footerContainer");
  if (!container) return; // Если контейнера нет — прекращаем выполнение

  fetch("./footer.html")
      .then(response => response.text())
      .then(data => {
          container.innerHTML = data;
      })
      .catch(error => console.error("Ошибка загрузки футера:", error));
});



document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("CallbackContainer");

  
  if (!container) return; // Если контейнера нет — прекращаем выполнение

  fetch("./callback.html")
      .then(response => response.text())
      .then(data => {
          container.innerHTML = data;
      })
      .catch(error => console.error("Ошибка загрузки секции:", error));
});


// Функция для добавления нового блока с возможностью передачи данных через объект
function createInformationBlock(data) {
  // Находим родительский контейнер с классом information_list
  const container = document.querySelector('.information_list');

  // Создаем новый блок div с классом information_list
  const newInformationList = document.createElement('div');
  newInformationList.classList.add('information__list--data');

  // Создаем блок для текста
  const newTextBlock = document.createElement('div');
  newTextBlock.classList.add('information__text');

  // Создаем заголовок и добавляем текст
  const newHeader = document.createElement('h2');
  newHeader.classList.add('information__text--header');
  newHeader.textContent = data.headerText;

  // Создаем первый параграф и добавляем текст
  const newParagraph1 = document.createElement('p');
  newParagraph1.textContent = data.paragraph1Text;

  // Создаем второй параграф и добавляем текст
  const newParagraph2 = document.createElement('p');
  newParagraph2.textContent = data.paragraph2Text;

  // Добавляем все элементы в блок для текста
  newTextBlock.appendChild(newHeader);
  newTextBlock.appendChild(newParagraph1);
  newTextBlock.appendChild(newParagraph2);

  // Создаем блок для изображения
  const newImageBlock = document.createElement('div');
  newImageBlock.classList.add('information__img');

  const newImage = document.createElement('img');
  newImage.src = data.imgSrc;
  newImage.alt = data.imgAlt;

  // Добавляем изображение в блок
  newImageBlock.appendChild(newImage);

  // Если imageFirst == true, добавляем блок с изображением первым, иначе текст первым
  if (data.imageFirst) {
      newInformationList.appendChild(newImageBlock);  // Блок с изображением
      newInformationList.appendChild(newTextBlock);   // Блок с текстом
  } else {
      newInformationList.appendChild(newTextBlock);   // Блок с текстом
      newInformationList.appendChild(newImageBlock);  // Блок с изображением
  }

  // Добавляем новый блок в контейнер
  container.appendChild(newInformationList);
}

// Пример использования функции с передачей данных через объект
const data = {
  headerText: 'Нуждается, как будто в чем-то, в страхе.', // Заголовок
  paragraph1Text: 'Ненавистный, но милый лев сидит, огромный, величественный, как подушка среди волн. Он движется, неся в себе мощь и грацию. Каждый его шаг — это искусство, каждое движение — ритм.', // Первый параграф
  paragraph2Text: 'Могучий лев сидит величественно на холме, его грива колышется на ветру. Вокруг него мягкие, воздушные облака, словно подушка, поддерживающая его мощное тело. Позади заходящее солнце отбрасывает золотисто-оранжевые оттенки, а вдалеке виднеются силуэты гор. В его глазах спокойствие и мудрость, а его поза излучает грацию и силу.', // Второй параграф
  imgSrc: '/img/floatimg (2).svg', // Путь к изображению
  imgAlt: 'Лев среди волн', // Описание изображения
  imageFirst: true // Если true, изображение будет первым
};

// Вызов функции с передачей данных
createInformationBlock(data);


//ОПИСАНИЕ

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".vcladki_item");
  const contents = document.querySelectorAll(".tables-content");

  tabs.forEach(tab => {
      tab.addEventListener("click", function () {
          // Убираем активный класс у всех вкладок
          tabs.forEach(item => item.classList.remove("active"));
          this.classList.add("active");

          // Показываем нужный контент
          const selectedTab = this.getAttribute("data-tab");
          contents.forEach(content => {
              content.classList.remove("active");
              if (content.classList.contains(`tables--${selectedTab}`)) {
                  content.classList.add("active");
              }
          });
      });
  });
});


//ПРЕИМУЩЕСТВА
const list1 = document.getElementById('textList');  // Первый <ul>
const list2 = document.getElementById('descriptionList');  // Второй <ul>

// ДВА ОТДЕЛЬНЫХ МАССИВА ДЛЯ РАЗНЫХ СПИСКОВ
const items1 = [
  { text: 'Дверь входная', imgSrc: '/icon/texticon.svg' },
  { text: 'Балконная дверь', imgSrc: '/icon/texticon.svg' }
];

const items2 = [
  { text: 'Минимизирует кражи среди персонала', imgSrc: '/icon/texticon.svg' },
  { text: 'Сложно взломать, высокая надежность', imgSrc: '/icon/texticon.svg' },
  { text: 'Можно отказаться от создания физических карт или ключей и высылать электронный ключ новым сотрудникам прямо на смартфон', imgSrc: '/icon/texticon.svg' },
  { text: 'Сложно взломать, высокая надежность', imgSrc: '/icon/texticon.svg' }
];

// Универсальная функция для добавления элементов в список
function addItemsToList(list, items) {
  if (!list) {
    console.error("Список не найден!");
    return;
  }

  items.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('text__list--item');

    const img = document.createElement('img');
    img.src = item.imgSrc;
    img.alt = item.text;

    const p = document.createElement('p');
    p.classList.add('item__text');
    p.textContent = item.text;

    li.appendChild(img);
    li.appendChild(p);
    list.appendChild(li);
  });
}

// Вызываем функцию для КАЖДОГО списка с разными данными
addItemsToList(list1, items1);  // Добавляем в первый список
addItemsToList(list2, items2);  // Добавляем в второй список

