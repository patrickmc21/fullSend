import { clientId, clientSecret } from '../apiKeys/strava-keys';

const getToken = async (temporaryToken) => {
  const url = 'https://git.heroku.com/fullsend.com/tokenexchange';
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    cache: 'no-cache',
    body: JSON.stringify({
      token: temporaryToken,
      clientId: clientId,
      clientSecret: clientSecret
    })
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const athleteInfo = JSON.parse(data);
    return athleteInfo;
  } catch (error) {
    console.log(error)
    throw error.message;
  }
};

export default getToken;