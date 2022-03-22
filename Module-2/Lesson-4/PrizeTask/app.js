// Burada, value – başlanğıc məbləğ, valueEnd – son məbləğ,
// precent – illik faiz dərəcəsini göstərən ədəddir,
// monthNum – məbləğin qoyulduğu müddətdir.

let value = prompt('Əmtəənin məbləğini daxil edin !');
let monthNum = prompt('Müddəti daxil edin !');
let precent = prompt('Faiz dərəcəsini daxil edin !')
let valueEnd = value*((100+(precent*monthNum))/100)
alert(valueEnd);
