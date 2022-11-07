import { useNavigate } from 'react-router-dom';
import '../../../../styles/styles.scss';

function ButtonPlaceParking({ id }: { id: string }): JSX.Element {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/parkings-map?id=${id}`);
  };
  return (
    <button className={`btn`} onClick={handleClick}>
      Mostrar en el mapa
    </button>
  );
}

export default ButtonPlaceParking;
