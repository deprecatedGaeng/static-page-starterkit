const titleWrap = document.querySelector('#title');
const msgWrap = document.querySelector('#msg');

const title = () => 'Hi there!!';
const msg = () => 'Hope you happy building Web with this package.';
window.onload = () => {
    titleWrap.innerHTML = title();
    msgWrap.innerHTML = msg();
}