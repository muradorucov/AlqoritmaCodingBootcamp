// const getCharacterData = async (id) => {
//   if (id === 0) {
//     throw 'Invalid id';
//   }

//   const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
//   const data = await response.json();
// //   return data;
//   console.log(data);
// }
// getCharacterData(1).then().catch()
// getCharacterData(2).then().catch()
// getCharacterData(3).then().catch()






const getCharacterData = async(id) => {
    if (id === 0) {
        return Promise.reject('Invalid id');
    }
    return fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(responses => {
            console.log(responses);
        })
        .catch(error => {
            console.log(error);
        });
}

Promise.all([
    getCharacterData(1),
    getCharacterData(2),
    getCharacterData(3)
])