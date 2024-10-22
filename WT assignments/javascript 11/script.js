function calculateDays() {
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    const result = document.getElementById('result');
    if (!startDate || !endDate) {
        result.textContent = "Please select both dates.";
        result.style.color = "red";
        return;
    }
    const timeDifference = endDate.getTime() - startDate.getTime();
    const dayDifference = timeDifference / (1000 * 3600 * 24);

    if (dayDifference >= 0) {
        result.textContent = `Number of days between the selected dates: ${dayDifference} days.`;
        result.style.color = "green";
    } else {
        result.textContent = "End date should be later than the start date.";
        result.style.color = "red";
    }
}
