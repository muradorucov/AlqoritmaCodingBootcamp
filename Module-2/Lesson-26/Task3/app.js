//Tapşırıq şərtində increase və decrease class`larını yaratmaq tələb etdiyi üçün aşağıdakı kimi yazdım
const elementss = document.querySelectorAll('td:last-child');
elementss.forEach((item) => {
    if (item.innerHTML > 0) {
        item.classList.add('increase');
        const tdIcrease = document.querySelectorAll('.increase');
        tdIcrease.forEach((item) => {
            item.style.color = 'green';
        });
    } else {
        item.classList.add('decrease');
        const tdDecrease = document.querySelectorAll('.decrease');
        tdDecrease.forEach((item) => {
            item.style.color = 'red';
        });
    }
    console.log(item);
});

//Lakin, tapşırıqda class`ları yaratmağı tələb etməsəydi daha sadə yol ilə aşağıdakı kimi yazamaq olardıkı yazdım.
const elements = document.querySelectorAll('.currency tr td:last-child');
elements.forEach((element) => {
    if (element.innerHTML > 0) {
        element.style.color = 'green';
    } else {
        element.style.color = 'red';
    }
});