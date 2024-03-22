import { Viewer } from "@photo-sphere-viewer/core";

document.addEventListener("DOMContentLoaded", () => {
  const modalBrochure = document.querySelector(".modal-brochure");
  const modalViewer = document.querySelector(".modal-viewer");
  const modalOpenBtn = document.querySelector(".footer-download");
  const modalCloseBtn = Array.from(
    document.querySelectorAll(".modal__close-btn")
  );
  const modalPlaces = Array.from(document.querySelectorAll(".main-place"));
  const viewBlocks = Array.from(document.querySelectorAll(".viewer"));
  const viewers = [
    { selector: "#viewer-apartments", panorama: "./img/apartments.png" },
    { selector: "#viewer-park", panorama: "./img/park.png" },
    { selector: "#viewer-mansions", panorama: "./img/mansions.png" },
    { selector: "#viewer-road", panorama: "./img/road.png" },
  ];
  const burgerBtn = document.querySelector(".header-burger-btn");
  const burgerMenu = document.querySelector(".header-menu");
  const phoneNumberBlock = document.querySelector(".menu-number__item");
  const phoneNumberHidden = document.querySelector(".menu-number__item_hiden");
  const phoneNumberOpen = document.querySelector(".menu-number__item_open");

  viewers.forEach(({ selector, panorama }) => {
    new Viewer({
      container: document.querySelector(selector),
      panorama,
    });
  });

  modalOpenBtn.addEventListener("click", () => {
    modalBrochure.classList.add("_active");
  });

  modalCloseBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalBrochure.classList.remove("_active");
      modalViewer.classList.remove("_active");
    });
  });

  const cleanViewerStyles = () => {
    viewBlocks.forEach((block) => {
      block.style.display = "none";
    });
  };

  modalPlaces.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      modalViewer.classList.add("_active");
      cleanViewerStyles();
      viewBlocks[index].style.display = "block";
    });
  });

  modalBrochure.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      modalBrochure.classList.remove("_active");
    }
  });

  modalViewer.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) {
      modalViewer.classList.remove("_active");
    }
  });

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("_active");
    burgerMenu.classList.toggle("_active");
  });

  phoneNumberBlock.addEventListener("click", () => {
    phoneNumberHidden.style.opacity = "0";
    phoneNumberOpen.style.opacity = "1";
    phoneNumberBlock.setAttribute("href", "tel:+998991234567");
  });
});
