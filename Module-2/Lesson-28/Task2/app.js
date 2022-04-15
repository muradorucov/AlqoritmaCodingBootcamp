function lineThrough(event) {
    event.target.style.textDecoration = 'line-through';
    event.target.removeEventListener('click', lineThrough);
};

function changeDecoration(event) {
    event.target.style.textDecoration = 'None';
};
const elements = document.querySelectorAll('button');
elements.forEach((element) => {
    element.addEventListener('click', changeDecoration);
    element.addEventListener('click', lineThrough);
});


//Anonim funkisya ile yazilish formasi
/**const elements = document.querySelectorAll('button');
elements.forEach((element) => {  
  element.addEventListener('click', (event) => {
    const textDecoration = event.target.style.textDecoration;

    if (textDecoration === 'line-through') {
      event.target.style.textDecoration = 'None';
    } else {
      event.target.style.textDecoration = 'line-through';
    }
  });
}); */