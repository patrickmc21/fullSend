import key from '../apiKeys/mtb-project-key.js';

const getTrailsById = async (ids) => {
  const idString = ids.join(',');
  const rootUrl = 'https://www.mtbproject.com/data/get-trails-by-id';
  const urlOptions = `ids=${idString}&key=${key}`;
  const endpoint = `${rootUrl}${urlOptions}`;
  const optionsObject = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(endpoint, optionsObject);
    const trails = await response.json();
    return trails;
  } catch (error) {
    throw error.message;
  };
};

export default getTrailsById;