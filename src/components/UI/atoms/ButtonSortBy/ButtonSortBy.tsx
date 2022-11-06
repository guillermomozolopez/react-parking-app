import { useState } from 'react';
import { Parking } from '../../../../App';
function ButtonSortBy({
  handleClick,
  sortByDistance
}: {
  handleClick: () => void;
  sortByDistance: boolean;
}): JSX.Element {
  return (
    <button onClick={handleClick}>
      {sortByDistance ? 'Ordenar alfabeticamente' : 'Ordernar por distacia'}
    </button>
  );
}

export default ButtonSortBy;
