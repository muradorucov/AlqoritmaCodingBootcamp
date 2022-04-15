const nameInput = document.querySelector('input');
const textarea = document.querySelector('textarea');
const btn = document.querySelector('.comment-send');

btn.addEventListener('click', () => {
    console.log(nameInput.value)
    console.log(textarea.value)
})