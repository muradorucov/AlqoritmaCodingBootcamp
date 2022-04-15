let input = document.querySelector('input');
let currency = document.querySelector('.currency');
let btn = document.querySelector('button');
let result = document.querySelector('.result');

btn.addEventListener('click', () => {
    if (currency.value == 'Azn') {
        result.innerHTML = input.value * 0.020 + ' Manat. ';
    } else if (currency.value == 'Usd') {
        result.innerHTML = input.value * 0.012 + ' Dollar. ';
    } else if (currency.value == 'Tl') {
        result.innerHTML = input.value * 0.18 + ' Lirə. ';
    } else if (currency.value == 'Euro') {
        result.innerHTML = input.value * 0.011 + ' Euro. ';
    }
});