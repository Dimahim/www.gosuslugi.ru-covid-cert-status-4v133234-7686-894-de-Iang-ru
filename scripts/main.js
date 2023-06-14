const language = document.querySelectorAll('.header__language');
const page = document.querySelectorAll('.page');
const buttonClose = document.querySelectorAll('.profile__button-close');

// функция лайка 
function addlike() {
  page.forEach(function (item) {
    item.classList.toggle('page_close');
  });
};

//Клик по кнопке
function clickLanguage() {
  language.forEach(function (item) {
    item.addEventListener('click', addlike )
  });
};
//запускам клиек по кнопке
clickLanguage();

// функция перехода по ссылке
function  redirectFunction() {
  window.location.href = "https://www.gosuslugi.ru/";
};

// переходим по ссылке закрытия кнопки
function closeDocument() {
  buttonClose.forEach(function (item) {
    item.addEventListener('click', redirectFunction )
  })
};
//запускам клиек по кнопке
closeDocument();



