import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import '../../../../styles/styles.scss';

function ButtonMenu({
  children,
  location
}: {
  children: ReactNode;
  location: string;
}): JSX.Element {
  const { pathname } = useLocation();
  const active = location === pathname;

  return <button className={`btn btn-menu ${active && 'btn-active'}`}>{children}</button>;
}

export default ButtonMenu;
