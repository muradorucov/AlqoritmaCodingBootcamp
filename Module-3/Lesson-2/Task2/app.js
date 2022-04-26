const btn = document.querySelector('button');
let p = document.querySelector('p');
btn.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            p.innerHTML = data.value
                // console.log(data.value);
        })
})