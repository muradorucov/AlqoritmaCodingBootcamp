function stringData(text) {
    let splitText = text.split(' ')
    for (let i = 0; i < splitText.length; i++) {
        if (splitText[i].length >= 5) {
            splitText[i] = splitText[i].split("").reverse().join("")
        }
    }
    console.log(splitText.join(" "));
}

stringData('Seriously this is the last one')