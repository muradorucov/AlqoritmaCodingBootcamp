const elements = document.querySelectorAll('.primary');

//forEach ile
elements.forEach((element) => {
    console.log(element)
});

//for ile
for (let i = 0; i < elements.length; i++) {
    console.log(elements[i]);
}