// Import the service functions that we will test.
import { getData, postData, updateData, deleteData, patchData, headData, optionsData } from './serverJest02';

// Jest provides a "describe" block to group related tests together.
describe("HTTP Request Testing", () => {

    // Mock response data simulating what the server would return.
    const mockResponseData = { id: 1, name: "John Doe" };

    // Before each test, we mock the global fetch function to prevent real HTTP requests.
    beforeEach(() => {
        // Use jest.spyOn to mock fetch and provide a resolved promise for the response.
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockResponseData),  // Mock the .json() method to return our mock data.
                ok: true,  // Simulate a successful response (HTTP status 200).
                headers: new Headers({ "Content-Type": "application/json" })  // Mock headers for HEAD and OPTIONS tests.
            })
        );
    });

    // After each test, we reset the mock fetch function to avoid test contamination.
    afterEach(() => {
        jest.resetAllMocks();  // Clear any previous mock call information.
    });

    // Test for the GET request
    it("should make a GET request and return data", async () => {
        // Call the getData function, which makes a GET request.
        const data = await getData();  // Use async/await to handle the promise returned by getData.

        // Verify that fetch was called with the correct URL.
        expect(fetch).toHaveBeenCalledWith("/api/data");

        // Check if the data returned by getData matches the mock response data.
        expect(data).toEqual(mockResponseData);
    });

    // Test for the POST request
    it("should make a POST request with data", async () => {
        const newData = { name: "Jane Doe" };  // Data to send in the POST request.

        // Call the postData function and await its result.
        const data = await postData(newData);

        // Verify that fetch was called with the correct URL and options.
        expect(fetch).toHaveBeenCalledWith("/api/data", {
            method: "POST",  // Ensure the method is POST.
            headers: { "Content-Type": "application/json" },  // Ensure JSON headers were sent.
            body: JSON.stringify(newData),  // Ensure the correct data was sent in the body.
        });

        // Check that the data returned matches the mock response data.
        expect(data).toEqual(mockResponseData);
    });

    // Test for the PUT request
    it("should make a PUT request to update data", async () => {
        const updatedData = { name: "John Doe Updated" };  // Data to update.

        // Call the updateData function and await its result.
        const data = await updateData(1, updatedData);

        // Verify that fetch was called with the correct URL and options.
        expect(fetch).toHaveBeenCalledWith("/api/data/1", {
            method: "PUT",  // Ensure the method is PUT.
            headers: { "Content-Type": "application/json" },  // Ensure JSON headers were sent.
            body: JSON.stringify(updatedData),  // Ensure the correct data was sent in the body.
        });

        // Check that the data returned matches the mock response data.
        expect(data).toEqual(mockResponseData);
    });

    // Test for the DELETE request
    it("should make a DELETE request and return success", async () => {
        // Call the deleteData function and await its result.
        const success = await deleteData(1);

        // Verify that fetch was called with the correct URL and DELETE method.
        expect(fetch).toHaveBeenCalledWith("/api/data/1", { method: "DELETE" });

        // Ensure the DELETE request was successful (mock response.ok is true).
        expect(success).toBe(true);
    });

    // Test for the PATCH request
    it("should make a PATCH request and return updated data", async () => {
        const patchDataPayload = { age: 30 };  // Partial data to update.

        // Call the patchData function and await its result.
        const data = await patchData(1, patchDataPayload);

        // Verify that fetch was called with the correct URL and PATCH method.
        expect(fetch).toHaveBeenCalledWith("/api/data/1", {
            method: "PATCH",  // Ensure the method is PATCH.
            headers: { "Content-Type": "application/json" },  // Ensure JSON headers were sent.
            body: JSON.stringify(patchDataPayload),  // Ensure the correct data was sent.
        });

        // Check that the data returned matches the mock response data.
        expect(data).toEqual(mockResponseData);
    });

    // Test for the HEAD request
    it("should make a HEAD request and return headers", async () => {
        // Call the headData function and await its result.
        const headers = await headData();

        // Verify that fetch was called with the correct URL and HEAD method.
        expect(fetch).toHaveBeenCalledWith("/api/data", { method: "HEAD" });

        // Ensure the returned headers contain the correct content type.
        expect(headers.get("Content-Type")).toBe("application/json");
    });

    // Test for the OPTIONS request
    it("should make an OPTIONS request and return headers", async () => {
        // Call the optionsData function and await its result.
        const headers = await optionsData();

        // Verify that fetch was called with the correct URL and OPTIONS method.
        expect(fetch).toHaveBeenCalledWith("/api/data", { method: "OPTIONS" });

        // Ensure the returned headers contain the correct content type.
        expect(headers.get("Content-Type")).toBe("application/json");
    });
});
