const getRnMCaracter = (id) => {
    if (id === 0) {
        return Promise.reject('Invalid id');
    }

    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.json())
        .then((data) => {
            return data;
            // console.log(data)
        })

}

getRnMCaracter(1)