// Логика слайдера: нажимаем на ссылку "Греция" в слайдере ->
// добавляется класс trip__item--active на блок и удаляется с другого блока
// добавляется класс slider__link--active на блок и удаляется с другого блока

//Ссылки по странам
const greeceLink = document.querySelector(".slider__link--greece");
const albaniaLink = document.querySelector(".slider__link--albania");
const macedoniaLink = document.querySelector(".slider__link--macedonia");
const montenegroLink = document.querySelector(".slider__link--montenegro");
const croatiaLink = document.querySelector(".slider__link--croatia");

//Блоки со странами
const greeceBlock = document.querySelector(".trip__item--greece");
const albaniaBlock = document.querySelector(".trip__item--albania");
const macedoniaBlock = document.querySelector(".trip__item--macedonia");
const montenegroBlock = document.querySelector(".trip__item--montenegro");
const croatiaBlock = document.querySelector(".trip__item--croatia");


greeceLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  greeceLink.classList.add("slider__link--active");
  greeceBlock.classList.add("trip__item--active");
  albaniaLink.classList.remove("slider__link--active");
  albaniaBlock.classList.remove("trip__item--active");
  macedoniaLink.classList.remove("slider__link--active");
  macedoniaBlock.classList.remove("trip__item--active");
  montenegroLink.classList.remove("slider__link--active");
  montenegroBlock.classList.remove("trip__item--active");
  croatiaLink.classList.remove("slider__link--active");
  croatiaBlock.classList.remove("trip__item--active");
});

albaniaLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  greeceLink.classList.remove("slider__link--active");
  greeceBlock.classList.remove("trip__item--active");
  albaniaLink.classList.add("slider__link--active");
  albaniaBlock.classList.add("trip__item--active");
  macedoniaLink.classList.remove("slider__link--active");
  macedoniaBlock.classList.remove("trip__item--active");
  montenegroLink.classList.remove("slider__link--active");
  montenegroBlock.classList.remove("trip__item--active");
  croatiaLink.classList.remove("slider__link--active");
  croatiaBlock.classList.remove("trip__item--active");
});

macedoniaLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  greeceLink.classList.remove("slider__link--active");
  greeceBlock.classList.remove("trip__item--active");
  albaniaLink.classList.remove("slider__link--active");
  albaniaBlock.classList.remove("trip__item--active");
  macedoniaLink.classList.add("slider__link--active");
  macedoniaBlock.classList.add("trip__item--active");
  montenegroLink.classList.remove("slider__link--active");
  montenegroBlock.classList.remove("trip__item--active");
  croatiaLink.classList.remove("slider__link--active");
  croatiaBlock.classList.remove("trip__item--active");
});

montenegroLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  greeceLink.classList.remove("slider__link--active");
  greeceBlock.classList.remove("trip__item--active");
  albaniaLink.classList.remove("slider__link--active");
  albaniaBlock.classList.remove("trip__item--active");
  macedoniaLink.classList.remove("slider__link--active");
  macedoniaBlock.classList.remove("trip__item--active");
  montenegroLink.classList.add("slider__link--active");
  montenegroBlock.classList.add("trip__item--active");
  croatiaLink.classList.remove("slider__link--active");
  croatiaBlock.classList.remove("trip__item--active");
});

croatiaLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  greeceLink.classList.remove("slider__link--active");
  greeceBlock.classList.remove("trip__item--active");
  albaniaLink.classList.remove("slider__link--active");
  albaniaBlock.classList.remove("trip__item--active");
  macedoniaLink.classList.remove("slider__link--active");
  macedoniaBlock.classList.remove("trip__item--active");
  montenegroLink.classList.remove("slider__link--active");
  montenegroBlock.classList.remove("trip__item--active");
  croatiaLink.classList.add("slider__link--active");
  croatiaBlock.classList.add("trip__item--active");
});
