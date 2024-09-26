// mathOperations.spec.js

import { add, concatenate } from './mathOperations'; // Import the functions to test

describe("Math Operations Tests", function() {
  
  it("should correctly add two numbers", function() {
    expect(add(1, 2)).toBe(3); // Call the add method and assert the result
  });

  it("should correctly concatenate two strings", function() {
    expect(concatenate("Hello", " World")).toBe("Hello World"); // Call the concatenate method
  });
});
