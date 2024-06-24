function palindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
      let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
      
      // Check if the cleaned string is equal to its reverse
      let reversedStr = cleanedStr.split('').reverse().join('');
      
      return cleanedStr === reversedStr;
  }