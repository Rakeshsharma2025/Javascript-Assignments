function analyzeText() {
    const text = document.getElementById('input-text').value;
    let alphabetCount = 0;
    let digitCount = 0;
    let specialCharCount = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        // Check if the character is an alphabet
        if (/[a-zA-Z]/.test(char)) {
            alphabetCount++;
        }
        // Check if the character is a digit
        else if (/[0-9]/.test(char)) {
            digitCount++;
        }
        // If it's neither a letter nor a digit, it's a special character
        else if (/[^a-zA-Z0-9\s]/.test(char)) {
            specialCharCount++;
        }
    }

    document.getElementById('alphabet-count').textContent = `Alphabets: ${alphabetCount}`;
    document.getElementById('digit-count').textContent = `Digits: ${digitCount}`;
    document.getElementById('special-char-count').textContent = `Special Characters: ${specialCharCount}`;
}

function changeBackgroundColor() {
    const bgColor = document.getElementById('bg-color').value;
    document.getElementById('input-text').style.backgroundColor = bgColor;
}

function changeTextColor() {
    const fgColor = document.getElementById('fg-color').value;
    document.getElementById('input-text').style.color = fgColor;
}
