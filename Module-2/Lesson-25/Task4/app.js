function addStudent(name) {

    const parentElement = document.querySelector('ul');
    const newElement = document.createElement('li');
    newElement.innerHTML = name;
    parentElement.append(newElement);
}
addStudent('Murad Orucov');
addStudent('Adam Johnson');
addStudent('Zhang Weili');
addStudent('Tim Cook');