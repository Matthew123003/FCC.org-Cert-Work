describe("Array", function() {
    it("should start empty", function() {
      let arr = [];
      expect(arr.length).toBe(0);
    });
  
    it("should add an item", function() {
      let arr = [];
      arr.push(1);
      expect(arr.length).toBe(1);
    });
  });
  