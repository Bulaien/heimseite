

const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
overlay.addEventListener( 'click', () => {
    overlay.style.height='0%'
});
const menuBtn = document.querySelector(".button")
const menuLinks = menu.querySelectorAll('a');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle("active");
})

menuLinks.forEach(link => link.addEventListener('click', ()=>{
    menu.classList.remove('active')
})) 