import key from '../apiKeys/mtb-project-key.js';

const getTrailsById = async (ids) => {
  console.log(ids);
  const idString = ids.toDos.join(',');
  const rootUrl = 'https://www.mtbproject.com/data/get-trails-by-id';
  const urlOptions = `?ids=${idString}&key=${key}`;
  const endpoint = `${rootUrl}${urlOptions}`;
  
  try {
    const response = await fetch(endpoint);
    const trails = await response.json();
    console.log(trails)
    return trails;
  } catch (error) {
    throw error.message;
  };
};

export default getTrailsById;