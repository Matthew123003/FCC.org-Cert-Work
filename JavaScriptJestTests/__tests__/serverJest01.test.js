const request = require('supertest'); // Import Supertest to handle HTTP requests
const app = require('./server'); // Import the Express app to test

describe('API Endpoints', () => {

  test('GET /api/greeting should return a greeting message', async () => {
    const response = await request(app).get('/api/greeting'); // Make a GET request to the /api/greeting endpoint
    expect(response.statusCode).toBe(200); // Check if the status code is 200 (OK)
    expect(response.body).toHaveProperty('message', 'Hello, World!'); // Check if the response contains the correct message
  });

  test('POST /api/data should return a success message', async () => {
    const response = await request(app).post('/api/data'); // Make a POST request to the /api/data endpoint
    expect(response.statusCode).toBe(200); // Check if the status code is 200 (OK)
    expect(response.body).toHaveProperty('message', 'Data received'); // Check if the response contains the expected message
  });
});
