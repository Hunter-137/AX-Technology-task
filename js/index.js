// запуск DOM
document.addEventListener("DOMContentLoaded", function () {
  // ************************************************************************************************************** Модальное окно
  const modalWindow = document.querySelector(".modal"); // модальное окно
  const modalOpenBtn = document.querySelector(".footer-download"); // кнопка открытия модального окна
  const modalCloseBtn = document.querySelector(".modal__close-btn"); // кнопка крестик — закрытие модального окна

  // открытие модального окна по клику на кнопку
  modalOpenBtn.addEventListener("click", function () {
    modalWindow.classList.add("_active");
  });

  // закрытие модального окна по клику на крестик
  modalCloseBtn.addEventListener("click", function () {
    modalWindow.classList.remove("_active");
  });
});
