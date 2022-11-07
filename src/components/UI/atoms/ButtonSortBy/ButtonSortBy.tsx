import '../../../../styles/styles.scss';
import { BsSortDown } from 'react-icons/bs';
function ButtonSortBy({
  handleClick,
  sortByDistance
}: {
  handleClick: () => void;
  sortByDistance: boolean;
}): JSX.Element {
  return (
    <button className="btn" onClick={handleClick}>
      <BsSortDown />
      {sortByDistance ? 'Ordenar alfabeticamente' : 'Ordernar por distacia'}
    </button>
  );
}

export default ButtonSortBy;
