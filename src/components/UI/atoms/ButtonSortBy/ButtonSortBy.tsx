import { useState } from 'react';
import { Parking } from '../../../../App';
function ButtonSortBy({
  sortedParkings,
  setSortedParkings
}: {
  sortedParkings: [] | Parking[];
  setSortedParkings: React.Dispatch<React.SetStateAction<[] | Parking[]>>;
}): JSX.Element {
  const [sortByDistance, setSortByDistance] = useState<boolean>(false);

  const handleClick = () => {
    if (!sortByDistance) {
      setSortedParkings(
        sortedParkings.sort((p1: Parking, p2: Parking) => p2.distance - p1.distance)
      );
    } else {
      setSortedParkings(
        sortedParkings.sort((p1: Parking, p2: Parking) => p1.title.localeCompare(p2.title))
      );
    }
    setSortByDistance(!sortByDistance);
  };

  return (
    <button onClick={handleClick}>
      {sortByDistance ? 'Ordernar por distacia' : 'Ordenar alfabeticamente'}
    </button>
  );
}

export default ButtonSortBy;
