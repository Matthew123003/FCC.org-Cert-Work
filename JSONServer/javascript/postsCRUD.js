const createPost = async (newPost) => {
    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPost),
    });
    const data = await response.json();
    console.log('Created Post:', data);
  };
  
  // Example usage
  createPost({ title: 'New Post Title', body: 'Content of new post', likes: 0 });

  
  const getPosts = async () => {
    const response = await fetch('http://localhost:3000/posts');
    const data = await response.json();
    console.log('Posts:', data);
  };
  
  // Example usage
  getPosts();

  
  const updatePost = async (id, updatedPost) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedPost),
    });
    const data = await response.json();
    console.log('Updated Post:', data);
  };
  
  // Example usage
  updatePost(1, { title: 'Updated Title', body: 'Updated content', likes: 35 });
  

  const deletePost = async (id) => {
    const response = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
    });
    console.log(`Post with ID ${id} deleted.`);
  };
  
  // Example usage
  deletePost(2);
  