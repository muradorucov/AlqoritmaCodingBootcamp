let volumeBar = document.querySelector('.volume-bar');
let value = document.querySelector('.value');
let plusButton = document.querySelector('.plus');
let minusButton = document.querySelector('.minus');
let deg = 100;

plusButton.addEventListener('click', () => {
    if (deg < 100) {
        deg++;
        value.innerText = deg + '%';
        volumeBar.style.width = deg + '%';
    }
});

minusButton.addEventListener('click', () => {
    if (deg > 0) {
        deg--;
        value.innerText = deg + '%';
        volumeBar.style.width = deg + '%';
    }
});