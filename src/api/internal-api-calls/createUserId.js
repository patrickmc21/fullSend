export const createUserId = async (user) => {
  const { name, email, password } = user;
  const url = 'fullsend/users';
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
    const response = await fetch(url, options)
    const id = await response.json();
    return id; 
  } catch (error) {
    throw new Error({message: 'Oops, Something Went Wrong!'})
  }
}