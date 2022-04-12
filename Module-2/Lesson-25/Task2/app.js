const header = document.querySelector('h1');
const parentElement = document.querySelector('ul');
const newElement = document.createElement('li');
header.remove();
newElement.innerHTML = 'TITAN RTX';
parentElement.append(newElement);