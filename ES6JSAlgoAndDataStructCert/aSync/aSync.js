// GET REQUEST (READ)

async function getData() {
    try {
      const response = await fetch('https://example.com/api/resource');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  getData();

// POST REQUEST (CREATE)

async function postData() {
    try {
      const response = await fetch('https://example.com/api/resource', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key1: 'value1',
          key2: 'value2'
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  postData();

  
// PUT REQUEST (UPDATE)

async function putData() {
    try {
      const response = await fetch('https://example.com/api/resource/1', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key1: 'updatedValue1',
          key2: 'updatedValue2'
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  putData();

// PATCH REQUEST (PARTIALLY UPDATE)

async function patchData() {
    try {
      const response = await fetch('https://example.com/api/resource/1', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          key1: 'updatedValue1'
        })
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  patchData();


// DELETE REQUEST (DELETE/REMOVE)

async function deleteData() {
    try {
      const response = await fetch('https://example.com/api/resource/1', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  deleteData();

  
// HEAD REQUEST (HEADERS ONLY)

async function headRequest() {
    try {
      const response = await fetch('https://example.com/api/resource', {
        method: 'HEAD'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response.headers);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  headRequest();

// OPTIONS REQUEST (OPTIONS RETURN LIKE IN POSTMAN TO SEE WHAT REQUESTS YOU ARE ALLOWED TO MAKE)

async function optionsRequest() {
    try {
      const response = await fetch('https://example.com/api/resource', {
        method: 'OPTIONS'
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response.headers);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }
  
  optionsRequest();


//