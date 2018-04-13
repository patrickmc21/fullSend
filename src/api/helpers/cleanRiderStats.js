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
  const yearDistance = 
  const yearTime
  const yearGain
  const lifeDistance
  const lifeTime
  const lifeGain

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