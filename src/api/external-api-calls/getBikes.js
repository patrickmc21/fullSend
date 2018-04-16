const getBikes = async (bikeId, token) => {
  const url = `https://www.strava.com/api/v3/gear/${bikeId}`;
  const optionsObject = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  };

  try {
    const response = await fetch(url, optionsObject);
    const data = await response.json();
    return data;  
  } catch (error) {
    throw error.message;
  }
};

export default getBikes;