const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

// Function to check if a string is a palindrome
function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
  // Reverse the cleaned string
  const reversed = cleanStr.split('').reverse().join('');
  // Check if the original and reversed strings are the same
  return cleanStr === reversed;
}

// Function to handle button click
function handleClick() {
  const inputValue = textInput.value.trim();

  if (!inputValue) {
    alert('Please input a value');
    return;
  }

  if (isPalindrome(inputValue)) {
    result.textContent = `${inputValue} is a palindrome`;
  } else {
    result.textContent = `${inputValue} is not a palindrome`;
  }
}

// Event listener for button click
checkBtn.addEventListener('click', handleClick);
