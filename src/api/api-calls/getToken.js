import { clientId, clientSecret } from '../apiKeys/strava-keys';

const getToken = async (temporaryToken) => {
    const url = '/tokenexchange';
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify({
            token: temporaryToken,
            clientId: clientId,
            clientSecret: clientSecret
        })
    }

    const response = await fetch(url, options)
    const data = await response.json();
    const athleteInfo = JSON.parse(data)
    return athleteInfo;
}

export default getToken