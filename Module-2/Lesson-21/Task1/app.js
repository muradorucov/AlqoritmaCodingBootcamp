let symbols = "0123456789@#$%&*(){}''/?.,<>; "

function keepLetters(text) {
    let symbolsSplit = symbols.split('');
    for (let i = 0; i < symbolsSplit.length; i++) {
        text = text.replace(symbolsSplit[i], "")
    }
    console.log(text)
}
keepLetters('Give me $20*34');