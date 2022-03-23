let year = prompt('Ili daxil edin !');
yearNumber= Number(year);

if(yearNumber%4==0  && yearNumber%100==0 && yearNumber%400!=0){
    console.log('İl uzun ildi')
}else{
    console.log('İl uzun il deyil')
}