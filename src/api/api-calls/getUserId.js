export const getUserId = async (user) => {
  const { email, password } = user;
  const url = 'fullsend/users/signin';
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
  console.log(response);
  if (response.ok) {
    const id = await response.json();
    return id.id; 
  } else {
    console.log(response.error)
    return null;
  }
}