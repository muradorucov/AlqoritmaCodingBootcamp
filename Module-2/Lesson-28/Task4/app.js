const element = document.querySelector('.show');
const elementUl = document.querySelector('ul');

element.addEventListener('click', () => {
    if (elementUl.style.display === 'none') {
        elementUl.style.display = 'block';
    } else {
        elementUl.style.display = 'none';
    }
});