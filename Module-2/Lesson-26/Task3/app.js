let names = ['Sam', 'Alan', 'Bill', 'Adam', 'Anna', 'George'];
const newNames = names.filter((item) => {
    return item[0] == 'A';
});
console.log(newNames);