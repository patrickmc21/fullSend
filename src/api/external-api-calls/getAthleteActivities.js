export const getAthleteActivities = async (token, after, before) => {
  const rootUrl = 'https://www.strava.com/api/v3/athlete/activities'
  const urlOptions = `?before=${before}&after=${after}&page=1`
  const optionsObject = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json' 
    }
  };

  try {
    const response = await fetch(`${rootUrl}${urlOptions}`, optionsObject);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error.message;
  }
}