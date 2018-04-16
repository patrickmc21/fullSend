/* eslint-disable camelcase */

import { 
  convertMetersToMiles, 
  convertSecondsToHoursMins,
  convertMetersToFeet } from './rideCleaner';

const cleanRiderStats = (rider) => {
  const { 
    biggest_ride_distance,
    biggest_climb_elevation_gain,
    recent_ride_totals,
    ytd_ride_totals,
    all_ride_totals
  } = rider;
  const biggestRideDistance = convertMetersToMiles(biggest_ride_distance);
  const biggestElevation = convertMetersToFeet(biggest_climb_elevation_gain);
  const recentDistance = convertMetersToMiles(recent_ride_totals.distance);
  const recentTime = convertSecondsToHoursMins(recent_ride_totals.moving_time);
  const recentGain = convertMetersToFeet(recent_ride_totals.elevation_gain);
  const yearDistance = convertMetersToMiles(ytd_ride_totals.distance);
  const yearTime = convertSecondsToHoursMins(ytd_ride_totals.moving_time);
  const yearGain = convertMetersToFeet(ytd_ride_totals.elevation_gain);
  const lifeDistance = convertMetersToMiles(all_ride_totals.distance);
  const lifeTime = convertSecondsToHoursMins(all_ride_totals.moving_time);
  const lifeGain = convertMetersToFeet(all_ride_totals.elevation_gain);

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
  };
};

export default cleanRiderStats;