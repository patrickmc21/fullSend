import key from '../apiKeys/mtb-project-key.js';

const getTodoIds = async (email) => {
  const rootUrl = 'https://www.mtbproject.com/data/get-to-dos';
  const urlOptions = `?email=${email}&key=${key}`;
  const endpoint = `${rootUrl}${urlOptions}`;

  try {
    const response = await fetch(endpoint);
    const ids = await response.json();
    return ids;
  } catch (error) {
    throw error.message;
  };
};

export default getTodoIds;