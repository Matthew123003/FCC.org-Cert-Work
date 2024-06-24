function convertToRoman(num) {
    // Define the Roman numerals and their corresponding values
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
       
       let result = "";
       
       // Loop through the values and construct the Roman numeral string
       for (let [roman, value] of romanNumerals) {
           while (num >= value) {
               result += roman;
               num -= value;
           }
       }
       
       return result;
   }
   