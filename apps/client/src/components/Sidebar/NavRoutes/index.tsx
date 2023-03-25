import { NavLink } from 'react-router-dom';
import { NavRoutesProps } from '../types';

function NavRoutes(props: NavRoutesProps) {
  return (
    <NavLink
      className="text-white text-lg px-3 py-1 mb-1 flex items-center"
      to={props.to}
    >
      {props.children}
    </NavLink>
  );
}

export default NavRoutes;
