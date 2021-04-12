//Модальное окно
const popupField = document.querySelector(".popup");
// Кнопки открыть и закрыть
const openButton = document.querySelector(".promotion__button");
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
openButton.addEventListener("click", function (evt) {
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
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupField.classList.contains("popup__show") || successField.classList.contains("modal__show")) {
      evt.preventDefault();
      successField.classList.remove("modal__show");
      popupField.classList.remove("popup__show");
    }
  }
});
