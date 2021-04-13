// Навигация
const openNavButton = document.querySelector(".main-nav__toggle");
const closeNavButton = document.querySelector(".main-nav__close");
const mainNav = document.querySelector(".site-list");

openNavButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.remove("site-list--close");
  closeNavButton.classList.add("main-nav__close--active");
  openNavButton.classList.add("main-nav__toggle--close");
});
closeNavButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  mainNav.classList.add("site-list--close");
  closeNavButton.classList.remove("main-nav__close--active");
  openNavButton.classList.remove("main-nav__toggle--close");
});

//Модальное окно
const popupField = document.querySelector(".popup");
// Кнопки открыть и закрыть
const openButtonComplex = document.querySelector(".promotion__button--complex");
const openButtonEconomy = document.querySelector(".promotion__button--economy");
const closeButton = document.querySelector(".popup__close");

//Модальное окно об успешной отправке
const successField = document.querySelector(".modal");

// Кнопки открыть и закрыть
const successButton = document.querySelector(".popup__button");
const closeSuccessButton = document.querySelector(".modal__close");


//Обязательные поля для заполнения формы
const telephoneForm = document.querySelector(".application__field--telephone");
const emailForm = document.querySelector(".application__field--email");


const isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("telephone");
} catch (err) {
  isStorageSupport = false;
}

//Если все формы заполнены, появляется сообщение об успешной отправке
openButtonComplex.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupField.classList.add("popup__show");

  if (storage) {
    telephoneForm.value = storage;
    emailForm.focus();
  } else {
    telephoneForm.focus();
  }
});

openButtonEconomy.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupField.classList.add("popup__show");

  if (storage) {
    telephoneForm.value = storage;
    emailForm.focus();
  } else {
    telephoneForm.focus();
  }
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupField.classList.remove("popup__show");
});

//Если формы заполнены, появляется сообщение об успешной отправке
successButton.addEventListener("click", function (evt) {
  if (telephoneForm.value || emailForm.value) {
    evt.preventDefault();
    successField.classList.add("modal__show");
    popupField.classList.remove("popup__show");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("telephone", telephoneForm.value);
    }
  }
});

closeSuccessButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  successField.classList.remove("modal__show");
});

//Закрыть окно с помощью esc
document.addEventListener("keydown", function (evt) {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    if (popupField.classList.contains("popup__show") || successField.classList.contains("modal__show")) {
      evt.preventDefault();
      successField.classList.remove("modal__show");
      popupField.classList.remove("popup__show");
    }
  }
});
