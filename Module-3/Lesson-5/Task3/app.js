const getCharacterData = async(id) => {
    if (id === 0) {
        throw 'Invalid id';
    }

    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    return data;
    //   console.log(data);
}
getCharacterData(2).then().catch()