/* eslint-disable @typescript-eslint/no-var-requires */
import L from 'leaflet';

const iconParking = new L.Icon({
  iconUrl: require('./parking.svg').default,
  iconRetinaUrl: require('./parking.svg').default,
  iconSize: new L.Point(20, 28)
});

export { iconParking };
