import { useState, useEffect } from 'react';
import API_GetParkings from '../service/API_GetParkings';
import { Geolocation, Parking } from '../App';

function useParkings({
  currentGeolocation
}: {
  currentGeolocation: Geolocation | null;
}): Parking[] {
  const [parkings, setParkings] = useState<Parking[] | []>([]);

  useEffect(() => {
    API_GetParkings().then((data) => {
      if (currentGeolocation?.latitude !== undefined) {
        setParkings(
          data['@graph']
            .map((parking: Parking) => {
              const R = 6371e3; // metros
              const φ1 = (parking.location.latitude * Math.PI) / 180; // φ, λ in redianes
              const φ2 = (currentGeolocation?.latitude * Math.PI) / 180;
              const Δφ =
                ((currentGeolocation?.latitude - parking.location.latitude) * Math.PI) / 180;
              const Δλ =
                ((currentGeolocation?.longitude - parking.location.longitude) * Math.PI) / 180;

              const a =
                Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
              const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

              const d = (R * c) / 1000; // en kilometros
              return { ...parking, distance: d };
            })
            .sort((p1: Parking, p2: Parking) => p1.title.localeCompare(p2.title))
        );
      }
    });
  }, [currentGeolocation]);

  return parkings;
}

export default useParkings;
