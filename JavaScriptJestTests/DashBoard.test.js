import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react'; // Import methods for rendering and interacting with the DOM.
import { BrowserRouter as Router } from 'react-router-dom'; // Import Router for mocking React Router behavior.
import Dashboard from './Dashboard'; // Import the component being tested.

// Mock the global fetch function to control API responses.
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ name: 'Jane Doe' }), // Mocked response from the API.
    })
);

describe('Dashboard Component', () => {
    // Test case 1: Checking if the greeting is rendered correctly with the given prop.
    it('renders greeting message with name prop', () => {
        // Render the component wrapped in a Router (required for Link).
        const { getByText } = render(
            <Router>
                <Dashboard name="John" />
            </Router>
        );

        // Check if the greeting text appears in the DOM.
        expect(getByText('Hello, John!')).toBeInTheDocument();
    });

    // Test case 2: Mock the API call and verify the fetched user data is displayed.
    it('fetches and displays user data from API', async () => {
        // Render the component.
        const { getByText } = render(
            <Router>
                <Dashboard name="John" />
            </Router>
        );

        // Check that "Loading..." is shown initially.
        expect(getByText('Loading...')).toBeInTheDocument();

        // Wait for the API call to resolve and the user data to be displayed.
        await waitFor(() => expect(getByText('User: Jane Doe')).toBeInTheDocument());
    });

    // Test case 3: Simulate button clicks and test state changes (counter increment).
    it('increments the counter on button click', () => {
        // Render the component.
        const { getByText } = render(
            <Router>
                <Dashboard name="John" />
            </Router>
        );

        // Check the initial count is 0.
        expect(getByText('Current Count: 0')).toBeInTheDocument();

        // Simulate a button click to increment the count.
        fireEvent.click(getByText('Increment'));

        // Check that the count has increased to 1.
        expect(getByText('Current Count: 1')).toBeInTheDocument();
    });

    // Test case 4: Verify that the component renders correctly and matches a snapshot.
    it('matches the snapshot', () => {
        // Render the component and get its rendered HTML fragment.
        const { asFragment } = render(
            <Router>
                <Dashboard name="John" />
            </Router>
        );

        // Expect the rendered component to match the snapshot.
        expect(asFragment()).toMatchSnapshot(); // If the snapshot doesn't exist, Jest creates one.
    });

    // Test case 5: Ensure the Link to the settings page is rendered correctly.
    it('renders a link to settings page', () => {
        // Render the component.
        const { getByText } = render(
            <Router>
                <Dashboard name="John" />
            </Router>
        );

        // Check if the link to the "Settings" page is present.
        expect(getByText('Go to Settings')).toBeInTheDocument();
    });
});

/*
Prop Rendering: Validates how props are passed and rendered (like greeting with name).
API Mocking: Tests asynchronous behavior and verifies how fetched data is displayed.
Event Handling: Simulates user actions (button click) and checks state updates.
Snapshot Testing: Ensures the UI remains consistent over time.
External Libraries: Tests integrations with third-party libraries (like React Router).
*/