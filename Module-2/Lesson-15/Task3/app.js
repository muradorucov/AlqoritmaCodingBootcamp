const names = ["Michael", "Trevor", "Franklin", "Lamar", "Jimmy"];

function printWithDashes(item) {
    console.log('-------------');
    console.log(item);
    console.log('-------------');
};

function printWithHearts(item) {
    console.log(`<3<3<3<3 ${item} <3<3<3<3 `);
};

function printWithIndex(item, index) {
    console.log(`${index} - ${item}`);
};
names.forEach(printWithDashes);
names.forEach(printWithHearts);
names.forEach(printWithIndex);