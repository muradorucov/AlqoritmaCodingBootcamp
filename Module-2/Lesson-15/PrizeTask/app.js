function kebabToUpper(text) {
    let splitText = text.split('');
    for (let i = 0; i < splitText.length; i++) {
        if (splitText[i] === '-') {
            splitText[i] = '_';
        }
    }
    let textToUpper = splitText.join('').toUpperCase();
    console.log(textToUpper);
};
kebabToUpper('i-am-listening-to-fm-while-loading-different-url-on-my-browser-and-also-editing-some-xml-and-html');