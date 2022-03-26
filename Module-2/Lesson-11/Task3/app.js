let text = 'Salam. Sağol. Hələlik.';
for (i = 0; i < text.length; i++) {
    if (text[i] == '.') {
        console.log(text.indexOf(text[i]));
    }
}