let name = prompt('Ad və soyadınızı daxil edin!');
let arr = ['Murad Orucov', 'Hesen Quliyev'];
for (let i = 0; i < arr.length; i++) {
    if (name == '=') {
        console.log(arr);
        break;
    } else if (name == '') {
        arr.push(name);
        console.log(arr[0]);
        arr.pop();
    } else if (name != arr[i]) {
        arr.push(name);
        console.log(arr);
        break;
    }
}