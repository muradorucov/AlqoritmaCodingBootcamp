let date = prompt('Tarixi bu formatda daxil edin: «YYYY.MM.DD»');
let Arr = date.split('.');
let year = Arr[0];
let monthNumber = Arr[1];
let day = Arr[2];
if (year.length == 4 && year < 2022 && day < 32) {
    switch (monthNumber) {
        case '1':
        case '01':
            let month1 = 'Yanvar';
            console.log(`${day} ${month1} ${year}-cu il`);
            break;
        case '2':
        case '02':
            let month2 = 'Fevral';
            console.log(`${day} ${month2} ${year}-cu il`);
            break;
        case '3':
        case '03':
            let month3 = 'Mart';
            console.log(`${day} ${month3} ${year}-cu il`);
            break;
        case '4':
        case '04':
            let month4 = 'Aprel';
            console.log(`${day} ${month4} ${year}-cu il`);
            break;
        case '5':
        case '05':
            let month5 = 'May';
            console.log(`${day} ${month5} ${year}-cu il`);
            break;
        case '6':
        case '06':
            let month6 = 'Iyun';
            console.log(`${day} ${month6} ${year}-cu il`);
            break;
        case '7':
        case '07':
            let month7 = 'Iyul';
            console.log(`${day} ${month7} ${year}-cu il`);
            break;
        case '8':
        case '08':
            let month8 = 'Avqust';
            console.log(`${day} ${month8} ${year}-cu il`);
            break;
        case '9':
        case '09':
            let month9 = 'Sentyabr';
            console.log(`${day} ${month9} ${year}-cu il`);
            break;
        case '10':
            let month10 = 'Oktyabr';
            console.log(`${day} ${month10} ${year}-cu il`);
            break;
        case '11':
            let month11 = 'Noyabr';
            console.log(`${day} ${month11} ${year}-cu il`);
            break;
        case '12':
            let month12 = 'Dekabr';
            console.log(`${day} ${month12} ${year}-cu il`);
            break;
        default:
            console.log('Ayın rəqəmi yanlış daxil edilib!');
            break;
    }
} else {
    console.log('«Yanlış dəyər daxil edilib»')
}