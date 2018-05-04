const createUserId = async (user) => {
  const { name, email, password } = user;
  const url = 'https://git.heroku.com/fullsend.git/fullsend/users';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
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