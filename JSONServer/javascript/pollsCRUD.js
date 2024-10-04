const createPoll = async (newPoll) => {
    const response = await fetch('http://localhost:3000/polls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPoll),
    });
    const data = await response.json();
    console.log('Created Poll:', data);
  };
  
  // Example usage
  createPoll({ question: 'New Poll Question?', answerA: 'Option A', answerB: 'Option B' });

  
  const getPolls = async () => {
    const response = await fetch('http://localhost:3000/polls');
    const data = await response.json();
    console.log('Polls:', data);
  };
  
  // Example usage
  getPolls();

  
  const updatePoll = async (id, updatedPoll) => {
    const response = await fetch(`http://localhost:3000/polls/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPoll),
    });
    const data = await response.json();
    console.log('Updated Poll:', data);
  };
  
  // Example usage
  updatePoll(1, { question: 'Updated Poll Question?', answerA: 'Updated Option A', answerB: 'Updated Option B' });

  
  const deletePoll = async (id) => {
    const response = await fetch(`http://localhost:3000/polls/${id}`, {
      method: 'DELETE',
    });
    console.log(`Poll with ID ${id} deleted.`);
  };
  
  // Example usage
  deletePoll(1);
   