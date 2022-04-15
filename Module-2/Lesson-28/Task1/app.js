function changeColor(event) {
    event.target.style.color = 'lightgray';
}
const elements = document.querySelectorAll('button');
elements.forEach((element) => {
    element.addEventListener('click', changeColor);
});