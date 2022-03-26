let fullName = prompt('Soyad, Ad və Ata adınızı daxil edin !')
let Arr = fullName.split(' ');
let firstName= Arr[1];
let fatherName = Arr[2];
console.log(`${Arr[0]} ${firstName[0]}.${fatherName[0]}.`)