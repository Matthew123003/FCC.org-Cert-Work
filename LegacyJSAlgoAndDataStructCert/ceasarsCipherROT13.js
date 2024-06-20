function rot13(str) {
    // Initialize the result variable
      let result = "";
  
      // Loop through each character in the input string
      for (let i = 0; i < str.length; i++) {
          let char = str[i];
  
          // Check if the character is an uppercase letter
          if (char >= 'A' && char <= 'Z') {
              // Calculate the shifted character
              let shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + 13) % 26) + 65);
              result += shiftedChar;
          } else {
              // If not a letter, keep the character as is
              result += char;
          }
      }
  
      return result;
  }