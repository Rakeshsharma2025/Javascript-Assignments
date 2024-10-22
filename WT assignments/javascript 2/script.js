
function addItem() {
    const newItem = document.getElementById('new-item').value.trim();
    const comboBox = document.getElementById('combo-box');

    if (newItem === '') {
        alert('Please enter a valid item name.');
        return;
    }

    const option = document.createElement('option');
    option.text = newItem;
    option.value = newItem;
    comboBox.add(option);

    // Clear input field
    document.getElementById('new-item').value = '';
}

function removeItem() {
    const comboBox = document.getElementById('combo-box');
    const selectedOption = comboBox.selectedIndex;

    if (selectedOption === -1) {
        alert('Please select an item to remove.');
    } else {
        comboBox.remove(selectedOption);
    }
}

function displaySelected() {
    const comboBox = document.getElementById('combo-box');
    const selectedOption = comboBox.options[comboBox.selectedIndex];

    if (selectedOption) {
        document.getElementById('display-area').textContent = `Selected Item: ${selectedOption.text}`;
    } else {
        document.getElementById('display-area').textContent = 'No item selected.';
    }
}
