import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation.

const Dashboard = ({ name }) => {
    const [count, setCount] = useState(0); // State for the counter.
    const [user, setUser] = useState(null); // State to hold user data fetched from API.

    useEffect(() => {
        // Fetch user data from an API when the component mounts.
        fetch('https://api.example.com/user')
            .then((response) => response.json())
            .then((data) => setUser(data)) // Set the fetched data to the user state.
            .catch(() => setUser({ name: 'Guest' })); // Handle errors by setting a default user.
    }, []);

    return (
        <div>
            {/* Greet the user based on the name prop. */}
            <h1>Hello, {name}!</h1>

            {/* Display the current user data fetched from the API. */}
            {user ? <p>User: {user.name}</p> : <p>Loading...</p>}

            {/* Display and increment the count on button click. */}
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>

            {/* Link to navigate to the "Settings" page. */}
            <Link to="/settings">Go to Settings</Link>
        </div>
    );
};

export default Dashboard;
