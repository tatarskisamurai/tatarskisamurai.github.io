const element = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const menuLink = document.querySelectorAll('.menu_link');
burger.addEventListener('click', function () {
   element.classList.toggle('menu_active');
   burger.classList.toggle('burger_active');
 });
menuLink.forEach(item => {
   item.addEventListener('click', () => {
      element.classList.toggle('menu_active');
      burger.classList.toggle('burger_active');
   })
})