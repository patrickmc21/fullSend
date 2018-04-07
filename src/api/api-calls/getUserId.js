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
  let id = await response.json();
  console.log(id);
  if (id.length < 1) {
    console.log('bad')
    id = null
    console.log(id);
  } else {
    id = id[0]
  } 
  return id;
}