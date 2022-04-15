let header = document.querySelector('.header');
let td = document.querySelectorAll('tbody tr');
let Arr = [];
header.addEventListener('click', () => {
    header.classList.toggle('class');
    if (header.classList.contains('class')) {
        for (let i = 0; i < td.length; i++) {
            let arrElemenet = td[i].children[0].innerText;
            Arr.push(arrElemenet);
            Arr.sort();


        };
        Arr.forEach((item, index) => {
            td[index].children[0].innerText = item;

        });

    }



});