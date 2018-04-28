const updateRide = async (ride) => {
  const { id } = ride;
  const url = `/fullsend/rides/${id}`;
  const options = {
    method: 'PUT',
    body: JSON.stringify(ride),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await fetch(url, options);
  } catch (error) {
    throw {error: error.message, message: 'Error updating Ride'}
  }
};

export default updateRide;