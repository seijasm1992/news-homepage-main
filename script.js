const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const navbar = document.querySelector('.nav__container');
const overlay = document.querySelector('.overlay');
btnOpen.addEventListener('click', function () {
  navbar.classList.toggle('active');
  btnOpen.classList.toggle('activeBtn');
  btnClose.classList.toggle('activeBtnClose');
  overlay.classList.toggle('active');
});
btnClose.addEventListener('click', function () {
  navbar.classList.toggle('active');
  btnOpen.classList.toggle('activeBtn');
  btnClose.classList.toggle('activeBtnClose');
  overlay.classList.toggle('active');
});
