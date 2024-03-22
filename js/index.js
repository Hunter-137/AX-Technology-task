import { Viewer } from "@photo-sphere-viewer/core"; // библиотека по обзору 360

// запуск DOM
document.addEventListener("DOMContentLoaded", () => {
  // ************************************************************************************************************** Модальное окно брошюры
  // константы
  const modalWindow = Array.from(document.querySelectorAll(".modal")); // модальное окно
  const modalContentBlock = document.querySelector(".modal-content"); // контентная часть модального окна брошюры
  const modalOpenBtn = document.querySelector(".footer-download"); // кнопка открытия модального окна брошюры
  const modalCloseBtn = Array.from(
    document.querySelectorAll(".modal__close-btn")
  ); // кнопка крестик — закрытие модального окна
  const modalPlaces = Array.from(document.querySelectorAll(".main-place")); // кнопки обзор 360
  const viewBlocks = Array.from(document.querySelectorAll(".viewer")); // блоки для обзора 360
  const viewers = [
    // сбор всех картинок на 360
    { selector: "#viewer-apartments", panorama: "./img/apartments.png" },
    { selector: "#viewer-park", panorama: "./img/park.png" },
    { selector: "#viewer-mansions", panorama: "./img/mansions.png" },
    { selector: "#viewer-road", panorama: "./img/road.png" },
  ];
  const burgerBtn = document.querySelector(".header-burger-btn"); // кнопка бургер-меню
  const burgerMenu = document.querySelector(".header-menu"); // меню бургер
  const phoneNumberBlock = document.querySelector(".menu-number__item"); // номер телефона
  const phoneNumberHidden = document.querySelector(".menu-number__item_hiden"); // скрытый участок номера
  const phoneNumberOpen = document.querySelector(".menu-number__item_open"); // открытый участок номера

  // вытаскиваем все картинки с 360 обзором
  viewers.forEach(({ selector, panorama }) => {
    new Viewer({
      container: document.querySelector(selector),
      panorama,
    });
  });

  // открытие модального окна по клику на кнопку
  modalOpenBtn.addEventListener("click", function () {
    modalWindow[0].classList.add("_active");
  });

  // закрытие модального окна по клику на крестик
  modalCloseBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      modalWindow[0].classList.remove("_active");
      modalWindow[1].classList.remove("_active");
    });
  });

  // очищает display: block; прошлых открытых модалок по 360
  function cleanViewerStyles() {
    viewBlocks.forEach((block) => {
      block.style.display = "none";
    });
  }

  // по клику на кнопку по 360 открывается соответствующая картинка в 360
  modalPlaces.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      modalWindow[1].classList.add("_active");
      cleanViewerStyles();
      viewBlocks[index].style.display = "block";
    });
  });

  // скрытие модального окна, если клик был не по контентной части
  modalWindow.forEach((modal) => {
    modal.addEventListener("click", function (event) {
      if (event.target === event.currentTarget) {
        modalWindow[0].classList.remove("_active");
        modalWindow[1].classList.remove("_active");
      }
    });
  });

  // по клику открыть/закрыть бургер меню
  burgerBtn.addEventListener("click", function () {
    burgerBtn.classList.toggle("_active");
    burgerMenu.classList.toggle("_active");
  });

  // при клике на скрытый номер отображает открытый номер и добавляет атрибут href к тегу <a>
  phoneNumberBlock.addEventListener("click", function () {
    phoneNumberHidden.style.opacity = "0";
    phoneNumberOpen.style.opacity = "1";
    phoneNumberBlock.setAttribute("href", "tel:+998991234567");
  });
});
