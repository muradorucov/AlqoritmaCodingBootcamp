const h1 = document.querySelector('h1');
const contentUl = document.querySelector('.contents ul');
const createH1 = document.createElement('li');
createH1.innerHTML = h1.innerText;
contentUl.append(createH1);


const h2 = document.querySelectorAll('h2');
const contentUlLi = document.querySelector('.contents ul li');
const createUl = document.createElement('ul');
contentUlLi.append(createUl);
const contentUlLiUl = document.querySelector('.contents ul li ul');
for (let i = 0; i < h2.length; i++) {
    if (i == 0) {
        const createH2 = document.createElement('li');
        createH2.innerHTML = h2[0].innerText;
        contentUlLiUl.append(createH2);
    } else if (i == 1) {
        const createH2 = document.createElement('li');
        createH2.innerHTML = h2[i].innerText;
        contentUlLiUl.append(createH2);
        const h3 = document.querySelectorAll('h3');
        const contentUlLiUlLi = document.querySelector('.contents ul li ul li');
        const createUlOne = document.createElement('ul');
        contentUlLiUlLi.append(createUlOne);
        const contentUlLiUlLiUl = document.querySelector('.contents ul li ul li ul');
        for (let j = 0; j < h3.length; j++) {
            const createH3 = document.createElement('li');
            createH3.innerHTML = h3[j].innerText;
            contentUlLiUlLiUl.append(createH3);
        }
    } else if (i == 2) {
        const createH2 = document.createElement('li');
        createH2.innerHTML = h2[i].innerText;
        contentUlLiUl.append(createH2);
    }

}