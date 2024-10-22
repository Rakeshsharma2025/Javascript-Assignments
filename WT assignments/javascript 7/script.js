function changeFontType() {
    const fontType = document.getElementById('font-type').value;
    const paragraph = document.getElementById('myParagraph');
    paragraph.style.fontFamily = fontType;
}

function changeFontSize() {
    const fontSize = document.getElementById('font-size').value;
    const paragraph = document.getElementById('myParagraph');
    paragraph.style.fontSize = fontSize;
}

function changeTextColor() {
    const textColor = document.getElementById('text-color').value;
    const paragraph = document.getElementById('myParagraph');
    paragraph.style.color = textColor;
}
