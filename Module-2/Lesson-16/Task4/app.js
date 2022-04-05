function addTax(price) {
    let newPrice = price.map((item) => {
        return item + ((item * 20) / 100);
    });
    console.log(newPrice);
    console.log(typeof(price[0]));
};
addTax([12, 35, 5, 3, 54]);