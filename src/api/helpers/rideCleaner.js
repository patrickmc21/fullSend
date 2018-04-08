export const cleanDate = (date) => {
  const stringDate = new Date(date).toDateString();
  const splitDate = stringDate.split(' ');
  const shortArrayDate = splitDate.splice(0, 4);
  const cleanDate = shortArrayDate.join(' ');
  return cleanDate;
};

export const convertMetersToMiles = (meters) => {
  const miles = meters * 0.000621371;
  return miles;
};

export const convertSecondsToHoursMins = (seconds) => {
  const allMinutes = seconds / 60;
  const hours = (allMinutes / 60).toFixed(0);
  const minutes = allMinutes % 60;
  return `${hours}hrs ${minutes}min(s)`
};

const rideCleaner = (ride) => { 
  const cleanRide = {
    epoch: new Date(ride.start_date),
    date: cleanDate(ride.start_date),
    distance: convertMetersToMiles(ride.distance),
    elapsedTime: convertSecondsToHoursMins(ride.elapsed_time);
  }
}