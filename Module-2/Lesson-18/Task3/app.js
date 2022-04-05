const stockItem = {
    id: 4,
    place: 'sıra 5',
    weight: '30kq'
};
const shopItem = {
    ...stockItem,
    price: '345 USD'
};
delete shopItem.place;
console.log(shopItem);