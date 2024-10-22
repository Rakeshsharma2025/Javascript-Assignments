function changeBorderWidth() {
    const borderWidth = document.getElementById('border-width').value;
    const table = document.getElementById('myTable');
    table.style.borderWidth = borderWidth + 'px';
    const cells = table.getElementsByTagName('td');
    const headers = table.getElementsByTagName('th');
    for (let i = 0; i < cells.length; i++) {
        cells[i].style.borderWidth = borderWidth + 'px';
    }
    for (let i = 0; i < headers.length; i++) {
        headers[i].style.borderWidth = borderWidth + 'px';
    }
}

function changeBackgroundColor() {
    const bgColor = document.getElementById('bg-color').value;
    const table = document.getElementById('myTable');
    table.style.backgroundColor = bgColor;
}

function changeTextColor() {
    const fgColor = document.getElementById('fg-color').value;
    const table = document.getElementById('myTable');
    table.style.color = fgColor;
}
function changeTextAlignment() {
    const textAlign = document.getElementById('text-align').value;
    const cells = document.querySelectorAll('#myTable th, #myTable td');
    cells.forEach(cell => {
        cell.style.textAlign = textAlign;
    });
}
