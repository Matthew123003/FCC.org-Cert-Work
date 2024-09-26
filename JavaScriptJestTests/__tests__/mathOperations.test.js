const { add, concatenate } = require('./mathOperations'); // Import the functions to test

describe("Math Operations Tests", () => {

  test("should correctly add two numbers", () => {
    expect(add(1, 2)).toBe(3); // Call the add function and check result
  });

  test("should correctly concatenate two strings", () => {
    expect(concatenate("Hello", " World")).toBe("Hello World"); // Call the concatenate function and check result
  });
});
