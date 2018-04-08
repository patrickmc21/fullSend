const getAthleteInfo = async (token) => {
  const rootUrl = 'https://www.strava.com/api/v3/athlete'
  const optionsObject = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json' 
    }
  };

  const response = await fetch(rootUrl, optionsObject);
  console.log(response);
  const data = await response.json();
  return data;
}

export default getAthleteInfo