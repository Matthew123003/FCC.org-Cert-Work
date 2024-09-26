import { getData, postData, updateData, deleteData, patchData, headData, optionsData } from './httpRequestsJasmine';


// Define a test suite called "HTTP Request Testing".
describe("HTTP Request Testing", function () {

    // A mock response object, simulating what the server would return.
    const mockResponseData = { id: 1, name: "John Doe" };

    // beforeEach() is a Jasmine hook that runs before each test case in this suite.
    beforeEach(function () {
        // spyOn is used to create a spy on the fetch function, allowing us to mock its behavior.
        spyOn(window, "fetch").and.returnValue(
            Promise.resolve({  // We return a promise that resolves with a mock response.
                json: () => Promise.resolve(mockResponseData),  // Simulate the json() function returning our mock data.
                ok: true,  // Simulate a successful response (status 200).
                headers: new Headers({ "Content-Type": "application/json" })  // Mock headers for testing HEAD and OPTIONS.
            })
        );
    });

    // Test case: Ensure the GET request works as expected.
    it("should make a GET request and return data", function (done) {
        // Call the getData function, which makes a GET request.
        getData().then((data) => {
            // Verify that fetch was called with the correct URL ("/api/data").
            expect(fetch).toHaveBeenCalledWith("/api/data");
            // Check if the data returned from the promise matches the mock data.
            expect(data).toEqual(mockResponseData);
            // done() is called to indicate that the asynchronous test is complete.
            done();
        });
    });

    // Test case: Ensure the POST request works with correct data.
    it("should make a POST request with data", function (done) {
        const newData = { name: "Jane Doe" };  // Data to be sent in the POST request.
        
        postData(newData).then((data) => {
            // Verify that fetch was called with the correct URL and options (method: POST, headers, and body).
            expect(fetch).toHaveBeenCalledWith("/api/data", {
                method: "POST",  // Ensure the method is POST.
                headers: { "Content-Type": "application/json" },  // Ensure JSON headers are sent.
                body: JSON.stringify(newData),  // Check that the body contains the correct data.
            });
            // Check that the data returned matches the mock response data.
            expect(data).toEqual(mockResponseData);
            done();  // Mark the test as done.
        });
    });

    // Test case: Ensure the PUT request works to update data.
    it("should make a PUT request to update data", function (done) {
        const updatedData = { name: "John Doe Updated" };  // Data to be updated.

        updateData(1, updatedData).then((data) => {
            // Check that fetch was called with the correct URL ("/api/data/1") and PUT method.
            expect(fetch).toHaveBeenCalledWith("/api/data/1", {
                method: "PUT",  // Ensure the method is PUT.
                headers: { "Content-Type": "application/json" },  // Ensure JSON headers are sent.
                body: JSON.stringify(updatedData),  // Ensure the correct data was sent in the body.
            });
            // Check that the response matches the mock data.
            expect(data).toEqual(mockResponseData);
            done();  // Mark the test as done.
        });
    });

    // Test case: Ensure the DELETE request works to delete data.
    it("should make a DELETE request and return success", function (done) {
        deleteData(1).then((success) => {
            // Verify that fetch was called with the correct URL and DELETE method.
            expect(fetch).toHaveBeenCalledWith("/api/data/1", { method: "DELETE" });
            // Ensure the response indicates the deletion was successful.
            expect(success).toBe(true);  // success is true since response.ok is mocked as true.
            done();  // Mark the test as done.
        });
    });

    // Test case: Ensure the PATCH request works to partially update data.
    it("should make a PATCH request and return updated data", function (done) {
        const patchDataPayload = { age: 30 };  // Data to partially update.

        patchData(1, patchDataPayload).then((data) => {
            // Verify that fetch was called with the correct URL and PATCH method.
            expect(fetch).toHaveBeenCalledWith("/api/data/1", {
                method: "PATCH",  // Ensure the method is PATCH.
                headers: { "Content-Type": "application/json" },  // Ensure JSON headers are sent.
                body: JSON.stringify(patchDataPayload),  // Ensure the correct data was sent.
            });
            // Check that the response matches the mock data.
            expect(data).toEqual(mockResponseData);
            done();  // Mark the test as done.
        });
    });

    // Test case: Ensure the HEAD request works to retrieve headers.
    it("should make a HEAD request and return headers", function (done) {
        headData().then((headers) => {
            // Verify that fetch was called with the correct URL and HEAD method.
            expect(fetch).toHaveBeenCalledWith("/api/data", { method: "HEAD" });
            // Ensure the returned headers contain the correct content type.
            expect(headers.get("Content-Type")).toBe("application/json");
            done();  // Mark the test as done.
        });
    });

    // Test case: Ensure the OPTIONS request works to retrieve allowed methods (headers).
    it("should make an OPTIONS request and return headers", function (done) {
        optionsData().then((headers) => {
            // Verify that fetch was called with the correct URL and OPTIONS method.
            expect(fetch).toHaveBeenCalledWith("/api/data", { method: "OPTIONS" });
            // Ensure the returned headers contain the correct content type.
            expect(headers.get("Content-Type")).toBe("application/json");
            done();  // Mark the test as done.
        });
    });
});
