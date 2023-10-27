
// Отримання посилання на кнопку "Order Service"
const orderServiceButton = document.querySelector('.service-button');

// Отримання посилання на модальне вікно та кнопку закриття
const modal = document.querySelector('.backdrop');
const closeButton = document.querySelector('.modal-btn');

// Функція, яка відкриває модальне вікно
function openModal() {
  modal.classList.add('is-open');
}

// Функція, яка закриває модальне вікно
function closeModal() {
  modal.classList.remove('is-open');
}

// Додати обробник подій на кнопку "Order Service" для відкриття модального вікна
orderServiceButton.addEventListener('click', openModal);

// Додати обробник подій на кнопку закриття для закриття модального вікна
closeButton.addEventListener('click', closeModal);

