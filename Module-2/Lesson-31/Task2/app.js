let form = document.querySelector('.user-form');
let btn = document.querySelector('button');

form.addEventListener('submit', (event) => {
    alert('Kart qeydiyyatdan keçdi')
    event.preventDefault();
    const data = new FormData(event.target);
    console.log('Xəstənin adı və soyadı: ' + data.get('name'));
    console.log('Vəsiqə seriyası və nömrəsi: ' + data.get('cardnum'));
    console.log('Cins: ' + data.get('gender'));
    console.log('Yash: ' + data.get('age'));
    console.log('Telefon nömrəsi: ' + data.get('phone'));
    console.log('Simptomların təsviri: ' + data.get('desc'));
});