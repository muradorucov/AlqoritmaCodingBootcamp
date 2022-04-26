fetch('https://acb-api.algoritmika.org/api/transaction')
    .then(response => response.json())
    .then((data) => {
        // console.log(data)
        for (let i = 0; i < data.length; i++) {
            console.log(`${data[i].from}.-dan ${data[i].to}-ə ${data[i].amount} rubl ödəniş köçürdü`)
        }

    })