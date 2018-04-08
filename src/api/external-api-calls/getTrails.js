import key from '../apiKeys/mtb-project-key.js';

export const getTrails = async (lat, long) => {
  const rootUrl = 'https://www.mtbproject.com/data/get-trails?';
  const urlOptions = `lat=${lat}&lon=${long}&maxDistance=0&sort=distance&key=${key}`
  const response = await fetch(`${rootUrl}${urlOptions}`);
  const data = await response.json();
}