import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="border-l-green-700">
      <ul>
        <li>

        <NavLink to="/">Important</NavLink>
        </li>
        <li>

        <NavLink to="/about">A propos</NavLink>
        </li>
        <li>

        <NavLink to="/">Reservations</NavLink>
        </li>
        <li>

        <NavLink to="/">Entrainement</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;