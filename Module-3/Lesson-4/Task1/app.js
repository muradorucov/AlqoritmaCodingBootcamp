let newObj = {
    from: 'Murad Orucov',
    to: 'Fariz Əliyev',
    amount: 200
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