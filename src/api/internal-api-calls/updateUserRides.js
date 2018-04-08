const updateUserRides = async (ride, userId) => {
  const url = 'fullsend/users/rides';
  const options = {
    method: 'POST',
    body: {
      ...ride,
      userId
    },
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error({error: error.message, message: 'Error adding ride'})
  } 
}

export default updateUserRides;