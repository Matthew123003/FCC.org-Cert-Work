document.getElementById('convert-btn').addEventListener('click', convertToRoman);

function convertToRoman() {
    const num = parseInt(document.getElementById('number').value);
    const output = document.getElementById('output');

    if (isNaN(num)) {
        output.textContent = "Please enter a valid number";
    } else if (num < 1) {
        output.textContent = "Please enter a number greater than or equal to 1";
    } else if (num >= 4000) {
        output.textContent = "Please enter a number less than or equal to 3999";
    } else {
        output.textContent = toRoman(num);
    }
}

function toRoman(num) {
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];
    
    let roman = "";
    for (const [letter, value] of romanNumerals) {
        while (num >= value) {
            roman += letter;
            num -= value;
        }
    }
    return roman;
}
