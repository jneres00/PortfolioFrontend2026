function toggleMenu() {
const menu = document.querySelector('.menu ul');
menu.classList.toggle('show');
}

document.querySelectorAll('.menu a').forEach(link => {

link.addEventListener('click', () => {
document.querySelector('.menu ul').classList.remove('show');
});

});