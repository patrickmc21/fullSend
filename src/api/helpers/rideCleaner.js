export const cleanDate = (date) => {
  const stringDate = new Date(date).toDateString();
  const splitDate = stringDate.split(' ');
  const shortArrayDate = splitDate.splice(0, 4);
  const cleanDate = shortArrayDate.join(' ');
  return cleanDate;
};

export const convertMetersToFeet = (meters) => {
  const feet = meters * 3.28;
  return `${feet.toFixed(0)} ft`;
};

export const convertMetersToMiles = (meters) => {
  const miles = meters * 0.000621371;
  return `${miles.toFixed(0)} miles`;
};

export const convertSecondsToHoursMins = (seconds) => {
  const allMinutes = seconds / 60;
  const hours = parseInt(allMinutes / 60);
  const minutes = parseInt(allMinutes % 60);
  return `${hours} hr(s) ${minutes} min(s)`;
};

const rideCleaner = (rides) => { 
  const cleanRides = rides.map(ride => {
    return {
      epoch: Date.parse(ride.start_date)/1000,
      date: cleanDate(ride.start_date),
      distance: convertMetersToMiles(ride.distance),
      elapsedTime: convertSecondsToHoursMins(ride.elapsed_time),
      trailName: ride.name,
      location: ride.location,
      difficulty: ride.difficulty,
      img: ride.imgSmallMed,
      summary: ride.summary,
      rideId: ride.id,
      details: ''
    };
  });
  return cleanRides;
};

export default rideCleaner;