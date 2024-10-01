// Burger Menu Open //
document.addEventListener("DOMContentLoaded", function () {
  // Выбираем бургер-кнопку и навигацию
  let burgerButton = document.getElementById("burgerButton");
  let navigation = document.querySelector(".navigation");
  let links = document.querySelectorAll(".navigation__link");

  // Если бургер-кнопка существует, добавляем обработчик события
  if (burgerButton) {
    burgerButton.addEventListener("click", function (e) {
      e.stopPropagation(); // Остановка всплытия события
      burgerButton.classList.toggle("burger--active"); // Переключаем класс активности бургер-кнопки
      navigation.classList.toggle("navigation--active"); // Переключаем класс активности навигации
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      burgerButton.classList.remove("burger--active");
      navigation.classList.remove("navigation--active");
      console.log("link", link);
    });
  });
});
//

// Fixed header
$(document).ready(function () {
  var header = $(".header"),
    main = $(".main"),
    headerH = header.innerHeight(),
    scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
  });

  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerH) {
      header.addClass("fixed");
      main.css("padding-top", headerH); // Добавляем верхний отступ
    } else {
      header.removeClass("fixed");
      main.css("padding-top", 0); // Убираем верхний отступ
    }
  }

});
//

//language select
$(document).ready(function () {
  function formatState(state) {
    if (!state.id) {
      return state.text;
    }
    // Добавляем флаг в выпадающий список
    var baseUrl = $(state.element).data('image');
    var $state = $(
      '<span><img src="' + baseUrl + '" class="img-flag" /> ' + state.text + '</span>'
    );
    return $state;
  }

  // Инициализируем select2 с кастомным отображением
  $('#language-select').select2({
    templateResult: formatState,
    templateSelection: formatState,
    minimumResultsForSearch: Infinity // скрываем строку поиска, если не нужна
  });
});
//

//currency select
$(document).ready(function () {
  function formatCurrency(state) {
    if (!state.id) {
      return state.text;
    }
    var symbol = $(state.element).data('symbol'); // Получаем символ из data-атрибута
    var $state = $(
      '<span><span class="currency-symbol">' + symbol + '</span>' + state.text + '</span>'
    );
    return $state;
  }

  // Инициализируем select2 с кастомным отображением символов валют
  $('#currency-select').select2({
    templateResult: formatCurrency,    // Форматирование выпадающего списка
    templateSelection: formatCurrency, // Форматирование выбранного значения
    minimumResultsForSearch: Infinity, // Отключаем поиск
  });
});
//

//swiper
document.addEventListener("DOMContentLoaded", function () {
  // Функция для инициализации слайдера
  function initSwiper(selector, paginationClass, nextButtonClass, prevButtonClass) {
    if (document.querySelector(selector)) {
      new Swiper(selector, {
        observer: true,
        observeParents: true,
        // loop: true,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false,
        // },
        pagination: {
          el: paginationClass,
          clickable: true,
        },
        navigation: {
          nextEl: nextButtonClass,
          prevEl: prevButtonClass,
        },
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        breakpoints: {
          320: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 16,
          },
          767: {
            slidesPerView: 4,
            slidesPerGroup: 1,
            spaceBetween: 24,
          },
        },
      });
    }
  }

  // Инициализация слайдеров
  if (document.querySelector("#hero")) {
    new Swiper("#hero", {
      observer: true,
      observeParents: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".hero-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".hero-button-next",
        prevEl: ".hero-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
      },
    });
  }

  // Инициализация слайдеров для других секций
  initSwiper("#products", ".products-pagination", "", "");
});

// swiper