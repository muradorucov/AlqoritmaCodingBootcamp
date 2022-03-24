let agreement = confirm("Oyunu başlamağa hazırsınız?");
if (agreement == true) {
    alert("Miliyonçu oyununa xoş gəlmisiniz! Zəhmət olmasa cavab variantını böyük hərflə daxil edin.Məs:A");
    alert('İlk sual gəlir !!!');

    function question() {
        let questionOne = prompt('Qalatasary neçənci ildə yaranıb?: A)1920 B)1905 C)1906 D)2001');

        function answer() {
            if (questionOne == 'B') {
                alert('Doğrudur!');
                alert('İkinci sual gəlir!');
                let questionTwo = prompt('Günəş nə rəngdədir?: A)Sarı B)Mavi C)Yaşıl D)Qara');
                if (questionTwo == 'A') {
                    alert('İkinci cavab da doğrudur!');
                    alert('Üçüncü və sonuncu sual gəlir!');
                    let questionThree = prompt('Bir ildə neçə fəsil var?: A)2 B)6 C)5 D)4');
                    if (questionThree == 'D') {
                        alert("Siz qalib gəldiniz! Siz artıq Miliyonçusunuuuuz!");
                    } else {
                        alert('Təəssüf siz məğlub oldunuz! Sonuncu sual da yanıldınız !');
                    }
                } else {
                    alert('Təəssüf siz məğlub oldunuz! Ikinci sual da yanıldınız !');
                }
            } else {
                alert("Təəssüf siz məğlub oldunuz! İlk sual da yanıldınız!");
            }
        }
        answer();
    }
    question();
} else {
    alert("Hazır olana kimi sizi gözləyəcəm (:");
}

/*function question(questionOne, questionTwo, questionThree) {
    if (questionOne == 'B' && questionTwo == 'A' && questionThree == 'D') {
        alert('Siz qalib gəldiniz!!');
    } else {
        alert("Təəssüf siz məğlub oldunuz!");
    }
}
let questionOne = prompt('Qalatasary neçənci ildə yaranıb?: A)1920 B)1905 C)1906 D)2001');
let questionTwo = prompt('Günəş nə rəngdədir?: A)Sarı B)Mavi C)Yaşıl D)Qara');
let questionThree = prompt('Bir ildə neçə fəsil var?: A)2 B)6 C)5 D)4');
question(questionOne, questionTwo, questionThree); */