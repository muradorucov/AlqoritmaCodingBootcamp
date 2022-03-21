let year = prompt(" Zəhmət olmasa doğulduğunuz ili yazın");
if (year>2022 || year<1900){
    console.log("Yalnış tarix ((")
}else{
    console.log( "Indiyə kimi yaşadığınız günlərin sayı = "+ (2022-year)*365);
}