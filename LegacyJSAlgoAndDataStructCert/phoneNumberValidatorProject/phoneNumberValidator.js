function telephoneCheck(str) {
    // Define the regex pattern for valid US phone numbers
      const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
      
      // Test the string against the regex pattern
      return regex.test(str);
  }