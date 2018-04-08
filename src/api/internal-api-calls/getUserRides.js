const getUserRides = async (userId) => {
  const url = `fullsend/users/rides/${userId}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
  } catch (error) {
    throw new Error({error: error.message, message: 'Favorites not found!'})
  }

};

export default getUserRides;