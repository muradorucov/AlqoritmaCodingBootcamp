let newObj = {
    from: 'Murad Orucov',
    to: 'Rashad Mamedov',
    amount: 30
};
fetch('https://acb-api.algoritmika.org/api/transaction/6076', {
    method: 'PUT',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(newObj)
});
fetch('https://acb-api.algoritmika.org/api/transaction/')
    .then(response => response.json())
    .then((data) => {
        data.forEach((item, index) => {
            console.log(data[index])
        })
    });