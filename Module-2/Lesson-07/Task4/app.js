function moneyAccount(rubl, usd) {
    let moneyUsdToRubl = usd * 96.25;
    console.log(`Bütün depozitlər üzrə məbləğ: ${rubl+moneyUsdToRubl} rubl`);
}
moneyAccount(2000, 50);