let headers = document.querySelectorAll('.header');
let title = document.querySelector('.title');
let inputData = document.querySelector('.input');
let btn = document.querySelector('button');




btn.addEventListener('click', () => {
    let url = 'https://content.guardianapis.com/search';
    let apiKey = 'b671dca3-fdc9-4b34-9009-01d7f79a5ce4';
    let query = encodeURIComponent(inputData.value);
    fetch(`${url}?q=${query}&api-key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.response.results)
            headers.forEach((item, index) => {
                item.innerHTML = data.response.results[index].webTitle;
            })

        })
})