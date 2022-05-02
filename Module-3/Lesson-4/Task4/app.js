const url = 'https://content.guardianapis.com/search';
const apiKey = 'b671dca3-fdc9-4b34-9009-01d7f79a5ce4';


fetch(`${url}?api-key=${apiKey}`)
    .then(res => res.json())
    .then(data => {
        console.log(data.response.results)
        for (let i = 0; i < data.response.results.length; i++) {
            console.log(data.response.results[i].webTitle);

        }
    })