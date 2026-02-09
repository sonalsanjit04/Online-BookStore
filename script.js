let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

const readMoreBtn = document.getElementById('read-more-btn');
const popup = document.getElementById('about-popup');
const closeBtn = document.querySelector('.close-btn');

readMoreBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});