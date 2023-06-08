import { useContext } from 'react'
import { NavLink } from "react-router-dom";
import {TokenContext} from "../provider"
const Nav = () => {

    const [state, dispatch] = useContext(TokenContext);

  const checkIsActive = ({ isActive }) => {
    return {
      display: "block",
      margin: "10px",
      color: isActive ? "#ffffff" : "#878787"
    };
  };
  return (
    <nav>
      <ul style={{ listStyleType: "none", display: "flex" }}>
        <li>
          <NavLink to="/" style={checkIsActive}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" style={checkIsActive}>
            Login
          </NavLink>
        </li>
        <li>
        {state.token && <NavLink to="/add" style={checkIsActive}>
            Add Match
          </NavLink>}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
