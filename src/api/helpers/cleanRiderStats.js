import { 
  convertMetersToMiles, 
  convertSecondsToHoursMins,
  convertMetersToFeet } from './rideCleaner';

const cleanRiderStats = (rider) => {
  const biggestRideDistance = convertMetersToMiles(rider.biggest_ride_distance);
  const biggestElevation = convertMetersToFeet(rider.biggest_climb_elevation_gain);
  const recentDistance = convertMetersToMiles(rider.recent_ride_totals.distance);
  const recentTime = convertSecondsToHoursMins(rider.recent_ride_totals.moving_time);
  const recentGain = convertMetersToFeet(rider.recent_ride_totals.elevation_gain);
  const yearDistance = convertMetersToMiles(rider.ytd_ride_totals.distance);
  const yearTime = convertSecondsToHoursMins(rider.ytd_ride_totals.moving_time);
  const yearGain = convertMetersToFeet(rider.ytd_ride_totals.elevation_gain);
  const lifeDistance = convertMetersToMiles(rider.all_ride_totals.distance);
  const lifeTime = convertSecondsToHoursMins(rider.all_ride_totals.moving_time);
  const lifeGain = convertMetersToFeet(rider.all_ride_totals.elevation_gain);

  return {
    biggestRideDistance: biggestRideDistance,
    biggestElevation: biggestElevation,
    recentRides: {
      count: rider.recent_ride_totals.count,
      distance: recentDistance,
      time: recentTime,
      gain: recentGain
    },
    yearToDate: {
      count: rider.ytd_ride_totals.count,
      distance: yearDistance,
      time: yearTime,
      gain: yearGain
    },
    lifetime: {
      count: rider.all_ride_totals.count,
      distance: lifeDistance,
      time: lifeTime,
      gain: lifeGain
    }
  }
};

export default cleanRiderStats;