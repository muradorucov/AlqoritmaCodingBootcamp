//Birinci üsul
function capitalizeWords() {
    let myString = 'Salam mənim adım Muraddır !';
    let Arr = myString.split(' ');
    return Arr[0][0].toUpperCase() + Arr[0].substr(1) + ' ' + Arr[1][0].toUpperCase() + Arr[1].substr(1) + ' ' + Arr[2][0].toUpperCase() + Arr[2].substr(1) + ' ' + Arr[3][0].toUpperCase() + Arr[3].substr(1)
}
console.log(capitalizeWords());

//İkinci üsul
function capitalizeWordsEnd() {
    let myString = 'Hello my name is Harry';
    return myString.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}
console.log(capitalizeWordsEnd());


//Üçüncü üsul
const mySentence = "JavaScript proqramlaşdırma dilidir.";
const words = mySentence.split(" ");
//console.log(words.length)
//console.log(words[0].substr(1))

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    //hello = H + ello
}
let text = words.join(' ');
console.log(text);