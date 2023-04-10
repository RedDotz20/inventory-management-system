import { NavLink } from 'react-router-dom';
import { NavRoutesProps } from './types';

function NavRoutes(props: NavRoutesProps) {
  return (
    <NavLink
      className="text-white text-lg px-3 py-2.5 flex items-center hover:bg-[#F77E21] transition duration-200 ease-in-out rounded-xl mb-2 select-none"
      to={props.to}
    >
      {props.children}
    </NavLink>
  );
}

export default NavRoutes;
