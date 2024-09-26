describe("Sample Tests", function() {
  // The `describe` function is used to group related tests. 
  // It takes two arguments:
  // 1. A string that describes the suite of tests (in this case, "Sample Tests").
  // 2. A function that contains the tests (the "specs") to be executed within this group.
  
  it("should test a simple addition", function() {
    // The `it` function is used to define an individual test case. 
    // It also takes two arguments:
    // 1. A string that describes what this specific test is supposed to do (in this case, "should test a simple addition").
    // 2. A function that contains the actual test logic.
    
    expect(1 + 1).toBe(2);
    // The `expect` function is used to create an assertion.
    // Here, it checks if the expression `1 + 1` equals `2`.
    // The `.toBe` matcher checks for strict equality (using ===).
  });
  
  it("should test string concatenation", function() {
    // Another test case defined using `it`.
    // This one checks string concatenation.
    
    expect("Hello" + " World").toBe("Hello World");
    // Similar to the previous assertion, this checks if 
    // concatenating "Hello" and " World" equals "Hello World".
  });
});
