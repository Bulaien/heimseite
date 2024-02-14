
const menu =  document.querySelector('.menu');
const menuBtn = document.querySelector(".button")
menuBtn.addEventListener('click', () => {
 menu.classList.toggle("active");
})