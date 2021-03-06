const updateUserRides = async (ride, userId) => {
  const url = 'https://fullsend.herokuapp.com/fullsend/users/rides';
  const body = Object.assign(ride, {userId: userId});
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw {error: error.message, message: 'Error adding ride'};
  } 
};

export default updateUserRides;