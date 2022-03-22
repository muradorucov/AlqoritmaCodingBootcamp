let value = prompt('Üç ikirəqəmli və aralarında vergül olmaqla ədəd daxil edin !');
let Arr = value.split(',');
num1 = Number(Arr[0]);
num2 = Number(Arr[1]);
num3 = Number(Arr[2]);
if(Arr[0].length>2 || Arr[1].length>2 || Arr[2].length>2){
    console.log('Yanlış dəyər daxil edilib')
}else if(Arr[0].length==1 || Arr[1].length==1 || Arr[2].length==1){
    console.log('Yanlış dəyər daxil edilib')
}else if(num1>num2 && num3>num1 && num3>num2){
    console.log(`Orta ədəd - ${num1} -dir`)
}else if(num2>num1 && num3>num2 && num3>num1){
    console.log(`Orta ədəd - ${num2} -dir`)
}else if(num2>num3 && num3>num1 && num2>num3){
    console.log(`Orta ədəd - ${num3} -dir`)
}else if(num2>num1 && num1>num3 && num2>num3){
    console.log(`Orta ədəd - ${num1} -dir`)
}else if(num1>num2 && num2>num3 && num1>num3){
    console.log(`Orta ədəd - ${num2} -dir`)
}else if(num1>num3 && num3>num2 && num1>num2){
    console.log(`Orta ədəd - ${num3} -dir`)
}else if(num1==num2 || num2==num3 || num1==num3){
    console.log('İki və ya üç daxil edilmiş ədəd eynidir')
}