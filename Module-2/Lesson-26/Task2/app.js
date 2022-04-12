const elements = document.querySelectorAll('li');
elements.forEach((element) => {
    element.classList.add('item');
    if (element.classList.contains('primary') == false) {
        element.classList.add('secondary');
    }
    console.log(element)
});