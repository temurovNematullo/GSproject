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
  renderProductCards(products, 'productCards');




 
 
 

  function renderProductCards(productsArray, containerId) {
    const container = document.getElementById(containerId);
    
    productsArray.forEach(product => {
      const li = document.createElement('li');
      li.className = 'product-card';
      
      li.innerHTML = `
        <div class="product-card__labels">
          <img src="${product.available ? '/img/have.svg' : '/img/donthave.svg'}" 
               alt="${product.available ? 'В наличии' : 'Нет в наличии'}">
          <span class="product-card__status">${product.status}</span>
          ${product.oldPrice ? '<span class="product-card__sale">sale</span>' : ''}
        </div>
        
        ${product.isGift ? `
          <div class="product-card__gift">
            <img src="/img/podaroc.svg" alt="Подарок">
            <span>Подарок</span>
          </div>
        ` : ''}
  
        <div class="product-card__image">
          <img src="${product.image}" alt="${product.title}">
        </div>
        
        <div class="product-card__info">
          <p class="product-card__title">${product.title}</p>
          <div class="product-card__price">
            <span class="product-card__new-price">${product.newPrice}₽</span>
            ${product.oldPrice ? `<span class="product-card__old-price">${product.oldPrice}</span>` : ''}
          </div>
        </div>
      `;
  
      container.appendChild(li);
    });
    
  }


  const container = document.getElementById('productCards');
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


const reviews = [
  {
      name: "Андрей Попенко",
      date: "2021-08-20",
      text: "Et feugiat eu scelerisque nulla mattis...",
      rating: 3
  },
  {
      name: "Марина Смирнова",
      date: "2023-11-15",
      text: "Отличный замок, удобный в использовании...",
      rating: 4
  },
  {
      name: "Иван Кузнецов",
      date: "2022-05-10",
      text: "В целом неплохо, но хотелось бы больше функций...",
      rating: 1
  },
  {
      name: "Иван Кузнецов",
      date: "2022-05-10",
      text: "В, нункцийВ целом неплохо, но хункцийВ целом неплохо, но хункцийВ целом неплохо, но хункцийВ целом неплохо, но хункцийВ целом неплохо, но хункцийВ целом неплохо, но хункцийВ целом неплохо, но хункцийВ целом неплохо, но хо хотелось бы больше функций...В целом неплохо, но хотелось бы больше функций... В целом неплохо, но хотелось бы больше функций В целом неплохо, но хотелось бы больше функций...",
      rating: 1
  }
];

function generateStars(rating) {
  let stars = "";
  for (let i = 0; i < 5; i++) {
      if (i < rating) {
          stars += '<span class="characteric-star_empty"></span>'; // Закрашенная звезда
      } else {
          stars += '<span class="characteric-star "></span>'; // Пустая звезда
      }
  }
  return stars;
}

function renderReviews() {
  const container = document.getElementById("reviews-container");
  container.innerHTML = ""; // Очищаем контейнер перед рендерингом новых отзывов

  reviews.forEach(review => {
      const reviewHTML = `
          <div class="tables--reviews__list">
              <div class="reviews--head">
                  <p class="reviews--clientName">${review.name}</p>
                  <time datetime="${review.date}">${new Date(review.date).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}</time>
                  <div class="reviews--star">${generateStars(review.rating)}</div>
              </div>
              <div class="text--reviews">
                  <span>${review.text}</span>
              </div>
              <div class="reviews--feedback">
                  <div class="reviews--answer">
                      <img src="/icon/answer.svg" alt="">
                      <span>Ответить</span>
                  </div>
                  <div class="reviews--comment">
                      <img src="/icon/comment.svg" alt="">
                      <span class="comments--count">Комментарий</span>
                  </div>
              </div>
          </div>
      `;
      container.innerHTML += reviewHTML;
  });
}
// Вызов функции для рендера отзывов
renderReviews();

//Скрытие отзывов при необходимости и отоброжение
document.addEventListener("DOMContentLoaded", function () {
  const reviews = document.querySelectorAll(".tables--reviews__list");
  const toggleBtn = document.getElementById("toggle-reviews-btn");
  let isExpanded = false; 

  reviews.forEach((review, index) => {
      if (index >= 3) {
          review.style.display = "none";
      }
  });

  toggleBtn.addEventListener("click", function () {
      reviews.forEach((review, index) => {
          if (index >= 3) {
              review.style.display = isExpanded ? "none" : "block";
          }
      });

      toggleBtn.querySelector("span").textContent = isExpanded ? "Показать еще" : "Скрыть";
      isExpanded = !isExpanded;
  });
});


//Отоброжение секции каталог 
document.addEventListener('DOMContentLoaded', function () {
  const catalogLink = document.querySelector('.catalog');
  const infotableSection = document.getElementById('charactericindex');
  const infotableCharacteric = document.getElementById('infotablecharacteric');
  const catalogSection = document.getElementById('catalog-section');
  const breadcrumbContainer = document.querySelector('.hreff');

  // Изначально скрываем каталог
  catalogSection.style.display = 'none';

  catalogLink.addEventListener('click', function (event) {
      event.preventDefault(); // Отменяем стандартное поведение ссылки

      if (infotableSection.style.display !== 'none') {
          // Переход в каталог
          infotableSection.style.display = 'none';
          infotableCharacteric.style.display = 'none';
          catalogSection.style.display = 'block';
          updateBreadcrumbs('Каталог'); 
      } else {
          // Возврат из каталога
          infotableSection.style.display = 'block';
          infotableCharacteric.style.display = 'block';
          catalogSection.style.display = 'none';
          updateBreadcrumbs('Дверной Замок Golden Soft для офиса');
      }
  });

  function updateBreadcrumbs(lastItem) {
    // Получаем контейнер с хлебными крошками
    const breadcrumbContainer = document.querySelector('.hreff');

    // Проверяем, есть ли уже "Каталог" в хлебных крошках
    let catalogExists = !!breadcrumbContainer.querySelector('.catalog');

    // Очищаем контейнер
    breadcrumbContainer.innerHTML = `
        <a href=""><img src="/icon/home.svg" alt="" class="hrefficon"></a>
        <a href="" class="home">Главная</a>
        ${catalogExists ? '' : '<a href="" class="catalog">Каталог</a>'}
        <a href="">${lastItem}</a>
    `;
}

});


//Слайдер фильтра цены 
document.addEventListener("DOMContentLoaded", function () {
  const minPriceInput = document.getElementById("minPrice");
  const maxPriceInput = document.getElementById("maxPrice");
  const minRange = document.getElementById("minRange");
  const maxRange = document.getElementById("maxRange");
  const sliderTrack = document.querySelector(".slider-track");

  const minGap = 5000; // Минимальный отступ между значениями

  function updateTrack() {
      let minPercent = (minRange.value / minRange.max) * 100;
      let maxPercent = (maxRange.value / maxRange.max) * 100;
      sliderTrack.style.left = minPercent + "%";
      sliderTrack.style.right = (100 - maxPercent) + "%";
  }

  function syncInputs(event) {
      let minVal = parseInt(minRange.value);
      let maxVal = parseInt(maxRange.value);

      if (maxVal - minVal < minGap) {
          if (event.target === minRange) {
              minRange.value = maxVal - minGap;
          } else {
              maxRange.value = minVal + minGap;
          }
      }

      minPriceInput.value = minRange.value;
      maxPriceInput.value = maxRange.value;
      updateTrack();
  }

  function syncRanges() {
      let minVal = parseInt(minPriceInput.value);
      let maxVal = parseInt(maxPriceInput.value);

      if (maxVal - minVal >= minGap) {
          minRange.value = minVal;
          maxRange.value = maxVal;
      } else {
          if (minVal + minGap <= maxRange.max) {
              minRange.value = minVal;
              maxRange.value = minVal + minGap;
          } else {
              minRange.value = maxVal - minGap;
              maxRange.value = maxVal;
          }
      }

      updateTrack();
  }

  // Обновляем трек
  updateTrack();

  // Добавляем обработчики событий
  minRange.addEventListener("input", syncInputs);
  maxRange.addEventListener("input", syncInputs);
  minPriceInput.addEventListener("input", syncRanges);
  maxPriceInput.addEventListener("input", syncRanges);
});


//Аккордеон 
document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordeonfilter"); // Выбираем все аккордеоны

  accordions.forEach(function (accordion) {
    const accordionHeader = accordion.querySelector(".accordion-header");
    const accordionContent = accordion.querySelector(".accordion-content");
    const toggleButton = accordion.querySelector(".toggle-accordion");

    accordionHeader.addEventListener("click", function () {
      // Переключаем активный класс для контента
      accordionContent.classList.toggle("active");

      // Меняем направление стрелки
      if (accordionContent.classList.contains("active")) {
        toggleButton.src = "/icon/accordUp.svg";
      } else {
        toggleButton.src = "/icon/accordDown.svg";
      }
    });
  });
});


function addFeatureItem(text, count) {
  const html = `
    <li class="feature-item">
      <label class="feature-label">
        <input type="checkbox">
        <span class="custom-checkbox"></span>
        <span class="feature-text">${text}</span>
        <span class="feature-count">(${count})</span>
      </label>
    </li>
  `;

  // Находим все элементы с классом .features
  const featuresLists = document.querySelectorAll('.features');

  // Добавляем новый элемент в каждый найденный .features
  featuresLists.forEach(featuresList => {
    featuresList.insertAdjacentHTML('beforeend', html);
  });
}

// Использование
addFeatureItem('Умные замки', '27');
addFeatureItem('Антивандальные замки', '13');






document.addEventListener("DOMContentLoaded", function () {
  const catalogContainer = document.getElementById("catalogContainer");
  const prevPageBtn = document.querySelector(".prev-page");
  const nextPageBtn = document.querySelector(".next-page");
  

  const productsPerPage = 12; // 3 столбца × 4 ряда
  let currentPage = 1;

  // Массив товаров
  const catalogProducts = [
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
          
              }
  ];


  if (typeof renderProductCards !== "function") {
      console.error("Ошибка: renderProductCards() не найдена!");
      return;
  }

  function renderCatalog() {
      if (!catalogProducts || catalogProducts.length === 0) {
          console.error("Ошибка: catalogProducts пуст или не определён!");
          return;
      }

      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = Math.min(startIndex + productsPerPage, catalogProducts.length);
      const pageProducts = catalogProducts.slice(startIndex, endIndex); //  Здесь отбираем карточки для текущей страницы

      catalogContainer.innerHTML = ""; // Очищаем контейнер перед рендерингом

      renderProductCards(pageProducts, "catalogContainer"); //Рендерим карточки текущей страницы

      updateButtons();
  }

  function updateButtons() {
      prevPageBtn.disabled = currentPage === 1;
      nextPageBtn.disabled = currentPage * productsPerPage >= catalogProducts.length;
  }

  prevPageBtn.addEventListener("click", function () {
      if (currentPage > 1) {
          currentPage--;
          renderCatalog();
      }
  });

  nextPageBtn.addEventListener("click", function () {
      if (currentPage * productsPerPage < catalogProducts.length) {
          currentPage++;
          renderCatalog();
      }
  });

  renderCatalog(); 
});
