document.getElementById('check-btn').addEventListener('click', validatePhoneNumber);
document.getElementById('clear-btn').addEventListener('click', clearResults);

function validatePhoneNumber() {
    const userInput = document.getElementById('user-input').value.trim();
    const resultsDiv = document.getElementById('results-div');

    if (userInput === '') {
        alert('Please provide a phone number');
        return;
    }

    const validPatterns = [
        /^1\s\d{3}-\d{3}-\d{4}$/,
        /^1\s\(\d{3}\)\s\d{3}-\d{4}$/,
        /^1\(\d{3}\)\d{3}-\d{4}$/,
        /^1\s\d{3}\s\d{3}\s\d{4}$/,
        /^\d{10}$/,
        /^\d{3}-\d{3}-\d{4}$/,
        /^\(\d{3}\)\d{3}-\d{4}$/
    ];

    const isValid = validPatterns.some(pattern => pattern.test(userInput));
    const hasValidCountryCode = userInput.startsWith('1') || userInput.length === 10 || userInput.startsWith('(') || userInput.match(/^\d{3}-\d{3}-\d{4}$/);

    if (isValid && hasValidCountryCode) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
    }
}

function clearResults() {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
}
