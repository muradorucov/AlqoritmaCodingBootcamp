const btn = document.querySelector('button');
let nameClass = document.querySelector('.name');
let lastName = document.querySelector('.lastname');
let emailClass = document.querySelector('.email');
let ageClass = document.querySelector('.age');
let countryClass = document.querySelector('.country');
let imgClass = document.querySelector('.img');
btn.addEventListener('click', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            console.log(data.results[0])
            nameClass.innerHTML = data.results[0].name.first
            lastName.innerHTML = data.results[0].name.last
            emailClass.innerHTML = data.results[0].email
            ageClass.innerHTML = data.results[0].dob.age
            countryClass.innerHTML = data.results[0].location.country
            document.getElementById("myImg").src = data.results[0].picture.large;

        })
});