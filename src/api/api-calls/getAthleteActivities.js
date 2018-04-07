import moment from 'moment';
const startTime = moment().startOf('year');

export const getAthleteActivities = async (token, athleteId, start, end = Date.now()) => {
  const rootUrl = 'https://www.strava.com/api/v3/athlete/activities'
  const urlOptions = `?before=${end}&after=${start}&page=1`
  const optionsObject = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": 'application/json' 
    }
  }
  const response = await fetch(`${rootUrl}${urlOptions}`, optionsObject);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}