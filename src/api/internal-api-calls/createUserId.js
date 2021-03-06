const createUserId = async (user) => {
  const { name, email, password } = user;
  const url = 'https://fullsend.herokuapp.com/fullsend/users';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
    }
  };

  try {
    const response = await fetch(url, options);
    const id = await response.json();
    return id; 
  } catch (error) {
    throw error.message;
  }
};

export default createUserId;