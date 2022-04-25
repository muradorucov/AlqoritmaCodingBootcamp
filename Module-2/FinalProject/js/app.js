let btnAdd = document.querySelector('.data-add');
let inputData = document.querySelector('.input');
let list = document.querySelector('ul');
let listBorder = document.querySelector('.list')
let deleteData = document.querySelector('.delete');
let sort = document.querySelector('.sort');

let listArr = [];
let storage = localStorage.getItem("listArr");
if (storage == null) {
    listArr = [];
} else {
    listArr = JSON.parse(localStorage.getItem("listArr"));
    let space = "";
    listArr.forEach((element, index) => {
        space += `<li>${element}<img class="deleteBtn" onclick="del(${index})" src="./icons/whitedelete.png" /></button> </li>`
    })
    list.innerHTML = space;
    listBorder.style.border = '1px solid #C4C4C4';
    listBorder.style.margin = '20px 0';
}
btnAdd.addEventListener("click", () => {
    listArr.push(inputData.value);
    let space = "";
    listArr.forEach((element, index) => {
        space += ` <li>${element} <img class="deleteBtn" onclick="del(${index})" src="./icons/whitedelete.png" /></li>`
    })
    list.innerHTML = space;
    listBorder.style.border = '1px solid #C4C4C4';
    listBorder.style.margin = '20px 0';
    localStorage.setItem("listArr", JSON.stringify(listArr))
});

function del(index) {
    listArr.splice(index, 1)
    let space = "";
    listArr.forEach((element, index) => {
        space += ` <li>${element} <img class="deleteBtn" onclick="del(${index})" src="./icons/whitedelete.png" /></li>`
    })
    list.innerHTML = space;

    if (space == "") {
        listBorder.style.border = "none";
        listBorder.style.margin = '0';
    }
    localStorage.setItem("listArr", JSON.stringify(listArr))
};
deleteData.addEventListener("click", (event) => {
    inputData.value = ""
})


// let listDelete = document.querySelectorAll('.deleteBtn');
// listDelete.forEach((element) => {
//     element.addEventListener("mouseover", (event) => {
//         if (event.target.getAttribute("src") == "./icons/whitedelete.png") {
//             event.target.src = "./icons/bluedelete.png";
//         }
//     })
// })





sort.addEventListener("click", (e) => {
    if (e.target.getAttribute("src") == "./icons/whitebottom.svg") {
        listArr.sort();
        let space = "";
        listArr.forEach((element, index) => {
            space += ` <li>${element} <img class="deleteBtn" onclick="del(${index})" src="./icons/whitedelete.png" /></li>`
        })
        list.innerHTML = space;
        listBorder.style.border = '1px solid #C4C4C4';
        listBorder.style.margin = '20px 0';
        inputData.value = ""
        e.target.src = "./icons/whitetop.svg"
    } else if (e.target.getAttribute("src") == "./icons/whitetop.svg") {
        listArr.sort().reverse()
        let space = "";
        listArr.forEach((element, index) => {
            space += ` <li>${element} <img class="deleteBtn" onclick="del(${index})" src="./icons/whitedelete.png" /></li>`
        })
        list.innerHTML = space;
        listBorder.style.border = '1px solid #C4C4C4';
        listBorder.style.margin = '20px 0';
        e.target.src = "./icons/whitebottom.svg"
    } else if (e.target.getAttribute("src") == "./icons/blacktop.svg") {
        listArr.sort()
        let space = "";
        listArr.forEach((element, index) => {
            space += ` <li>${element} <img class="deleteBtn" onclick="del(${index})" src="./icons/whitedelete.png" /></li>`
        })
        list.innerHTML = space;
        listBorder.style.border = '1px solid #C4C4C4';
        listBorder.style.margin = '20px 0';
        e.target.src = "./icons/blackbottom.svg"
    } else if (e.target.getAttribute("src") == "./icons/blackbottom.svg") {
        listArr.sort().reverse()
        let space = "";
        listArr.forEach((element, index) => {
            space += ` <li>${element} <img class="deleteBtn" onclick="del(${index})" src="./icons/whitedelete.png" /></li>`
        })
        list.innerHTML = space;
        listBorder.style.border = '1px solid #C4C4C4';
        listBorder.style.margin = '20px 0';
        e.target.src = "./icons/blacktop.svg"
    }
})

sort.addEventListener('mouseover', (event) => {
    if (event.target.getAttribute("src") == "./icons/whitebottom.svg") {
        event.target.src = "./icons/blackbottom.svg"
    } else if (event.target.getAttribute("src") == "./icons/whitetop.svg") {
        event.target.src = "./icons/blacktop.svg"
    }
})