let newObj = {
    from: 'Murad Orucov',
    to: 'Shamil Shahbaz',
    amount: 1
};
fetch('https://acb-api.algoritmika.org/api/transaction', {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(newObj)
});
fetch('https://acb-api.algoritmika.org/api/transaction')
    .then(response => response.json())
    .then((data) => {
        data.forEach((item, index) => {
            console.log(data[index])
        })
    });

fetch('https://acb-api.algoritmika.org/api/transaction/6077', {
    method: 'DELETE'
})