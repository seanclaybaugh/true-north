import {getDistance, convertDistance} from 'geolib';

export const getMilesFromSW = coords => {
  return Math.round(
    convertDistance(
      getDistance(coords, {
        latitude: 33.814831976267016,
        longitude: -117.92057887641796,
      }),
      'mi',
    ),
  );
};
