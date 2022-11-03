import './styles.scss';
import { RiParkingBoxLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import ButtonMenu from '../../atoms/ButtonMenu/ButtonMenu';

function Header(): JSX.Element {
  return (
    <div className="container">
      <NavLink to={`/weather`}>
        <ButtonMenu location="/weather">
          <span>Tiempo</span>
        </ButtonMenu>
      </NavLink>
      <NavLink to={`/parking`}>
        <ButtonMenu location="/parking">
          <span>Parkings</span>
        </ButtonMenu>
      </NavLink>
      <NavLink to={`/parkings-map`}>
        <ButtonMenu location="/parkings-map">
          <span>Mapa de parkins en Madrid</span>
        </ButtonMenu>
      </NavLink>
    </div>
  );
}

export default Header;
