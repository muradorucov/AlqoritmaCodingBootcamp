// Responsive Menu start
let menu = document.querySelector('.menu')
let menuBtn = document.querySelector('.viewBtn')
let exitBtn = document.querySelector('.exitBtn')
menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    exitBtn.style.display = 'block';
})

exitBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    exitBtn.style.display = 'none';
})

// Responsive Menu end

// Currency Conventor start
let left = document.querySelector(".left-input");
let leftSpan = document.querySelector('.left-result span')
let right = document.querySelector(".right-input");
let rightSpan = document.querySelector('.right-result span')
let leftBtn = document.querySelectorAll(".btnLeft li")
let rightBtn = document.querySelectorAll(".btnRight li")
let defaultCurrency1 = "RUB"
let defaultCurrency2 = "USD"
let inputValueLeft;
let inputValueRight;

fetch(`https://api.exchangerate.host/latest?base=${defaultCurrency1}&symbols=${defaultCurrency2}`)
    .then(res => res.json())
    .then(data => {
        let rate = data.rates
        let ratesValue = Object.values(rate)
        left.addEventListener("keyup", () => {
            let inputValueLeft = Number(left.value)
            right.value = inputValueLeft * ratesValue
        })
    })


leftBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
        let childBtn = e.target.parentElement.children
        for (let i = 0; i < childBtn.length; i++) {
            childBtn[i].classList.remove("active")
        }
        e.target.classList.add('active')
        defaultCurrency1 = e.target.id
        fetch(`https://api.exchangerate.host/latest?base=${defaultCurrency1}&symbols=${defaultCurrency2}`)
            .then(res => res.json())
            .then(data => {
                let rate = data.rates
                let ratesValue = Object.values(rate)
                let inputValueLeft = Number(left.value)
                right.value = inputValueLeft * ratesValue
                leftSpan.innerHTML = `1 ${defaultCurrency1} = ${ratesValue} ${defaultCurrency2}`
            })
    })
})
rightBtn.forEach((item) => {
    item.addEventListener("click", (e) => {
        let childBtn = e.target.parentElement.children
        for (let i = 0; i < childBtn.length; i++) {
            childBtn[i].classList.remove("active")
        }
        e.target.classList.add('active')
        defaultCurrency2 = e.target.id
        fetch(`https://api.exchangerate.host/latest?base=${defaultCurrency2}&symbols=${defaultCurrency1}`)
            .then(res => res.json())
            .then(data => {
                let rate = data.rates
                let ratesValue = Object.values(rate)
                let inputValueRight = Number(right.value)
                left.value = inputValueRight / ratesValue
                rightSpan.innerHTML = `1 ${defaultCurrency2} = ${ratesValue} ${defaultCurrency1}`
            })
    })
})

// Currency Conventor end