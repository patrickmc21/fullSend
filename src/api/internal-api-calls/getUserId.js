const getUserId = async (user) => {
  const { email, password } = user;
  const url = 'https://git.heroku.com/fullsend.git/fullsend/users/signin';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const response = await fetch(url, options);
  let id = await response.json();
  if (id.length < 1) {
    id = null;
  } else {
    id = id[0];
  } 
  return id;
};

export default getUserId;