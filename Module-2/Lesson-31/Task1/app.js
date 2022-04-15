let form = document.querySelector('.user-form');
let inputPassword = document.querySelector('.password');
let btn = document.querySelector('button');

form.addEventListener('submit', (event) => {
    // event.preventDefault();
    const data = new FormData(event.target);
    if (data.get('password').length > 5) {
        console.log("İcazə verildi");
    } else {
        console.log("Giriş qadağandır");
    }
});