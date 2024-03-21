// запуск DOM
import { Viewer } from "@photo-sphere-viewer/core";

document.addEventListener("DOMContentLoaded", () => {
  // ************************************************************************************************************** Модальное окно брошюры
  // константы
  const modalWindow = Array.from(document.querySelectorAll(".modal")); // модальное окно
  const modalOpenBtn = document.querySelector(".footer-download"); // кнопка открытия модального окна брошюры
  const modalCloseBtn = Array.from(
    document.querySelectorAll(".modal__close-btn")
  ); // кнопка крестик — закрытие модального окна
  const modalPlaces = Array.from(document.querySelectorAll(".main-place")); // кнопки обзор 360
  const viewBlocks = Array.from(document.querySelectorAll(".viewer")); // блоки для обзора 360
  const viewers = [
    { selector: "#viewer-apartments", panorama: "./img/apartments.png" },
    { selector: "#viewer-park", panorama: "./img/park.png" },
    { selector: "#viewer-mansions", panorama: "./img/mansions.png" },
    { selector: "#viewer-road", panorama: "./img/road.png" },
  ];

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
});
