const getRiderStats = async (id, token) => {
  const url = `https://www.strava.com/api/v3/athletes/${id}/stats`;
  const urlOptions = '?page=1&per_page=30';
  const optionsObject = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }

  const endPoint = `${url}${urlOptions}`;

  try {
    const response = await fetch(endPoint, optionsObject);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error.message;
  }
};

export default getRiderStats;