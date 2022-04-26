fetch('https://acb-api.algoritmika.org/api/transaction?to=Joaquin%20Phoenix')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            document.write(`${data[i].from}.-dan ${data[i].to}-ə ${data[i].amount} rubl ödəniş köçürdü`)
            document.write('<br>')
        }
    })