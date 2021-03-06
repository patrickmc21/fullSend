import key from '../apiKeys/mtb-project-key.js';

/* eslint-disable max-len */

export const getTrails = async (lat, long) => {
  const rootUrl = 'https://www.mtbproject.com/data/get-trails?';
  const urlOptions = `lat=${lat}&lon=${long}&maxDistance=0&sort=distance&key=${key}`;

  try {
    const response = await fetch(`${rootUrl}${urlOptions}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error.message;
  }
};