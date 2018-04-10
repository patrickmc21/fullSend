const getAthleteInfo = async (token) => {
  const rootUrl = 'https://www.strava.com/api/v3/athlete'
  const optionsObject = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json' 
    }
  };

  try {
    const response = await fetch(rootUrl, optionsObject);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error.message;
  }
};

export default getAthleteInfo