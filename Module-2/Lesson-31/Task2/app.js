const textArr = ['qırmızı', 'ağ', 'göy', 'yaşıl'];
const newTextArr = textArr.find((item) => {
    return item.length == 3;
})
console.log(newTextArr);