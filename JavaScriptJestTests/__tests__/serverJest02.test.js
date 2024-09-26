const request = require('supertest'); // Import Supertest to handle HTTP requests
const app = require('./server'); // Import the Express app to test

describe('API Endpoints', () => { // Group all tests related to API endpoints

  test('GET /api/greeting should return a greeting message', async () => { // Define a test for the GET /api/greeting endpoint
    const response = await request(app).get('/api/greeting'); // Use Supertest to send a GET request to the endpoint
    expect(response.statusCode).toBe(200); // Assert that the HTTP response status is 200 (success)
    expect(response.body).toHaveProperty('message', 'Hello, World!'); // Assert that the response body contains a 'message' field with the value 'Hello, World!'
  });

  test('POST /api/data should return a success message', async () => { // Define a test for the POST /api/data endpoint
    const response = await request(app).post('/api/data'); // Use Supertest to send a POST request to the endpoint
    expect(response.statusCode).toBe(200); // Assert that the HTTP response status is 200 (success)
    expect(response.body).toHaveProperty('message', 'Data received'); // Assert that the response body contains a 'message' field with the value 'Data received'
  });
});
