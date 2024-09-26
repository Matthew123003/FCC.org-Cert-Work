const { add, concatenate } = require('./mathOperations'); // Import the functions to test

describe("Math Operations Tests", () => { // 'describe' groups related test cases together, creating a test suite.

  test("should correctly add two numbers", () => { // 'test' defines a single test case. The first argument describes the test.
    
    expect(add(1, 2)).toBe(3); // 'expect' checks the result of 'add(1, 2)'. 'toBe(3)' ensures that it strictly equals 3.
    
  });

  test("should correctly concatenate two strings", () => { // Another test case for testing the 'concatenate' function.

    expect(concatenate("Hello", " World")).toBe("Hello World"); // 'expect' checks the result of 'concatenate("Hello", " World")'. 'toBe("Hello World")' checks strict equality with "Hello World".
    
  });
  
});

