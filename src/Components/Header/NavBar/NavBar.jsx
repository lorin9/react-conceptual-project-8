import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";
const NavBar = () => {
    return (
        <div>
          <nav className="flex justify-between py-4 shadow-md px-4">
            <Logo></Logo>

            <ul className="flex gap-5">
                <li>
<NavLink
  to="/"
  className={({ isActive, isPending }) => 
  isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Home 
</NavLink>
           </li>
                <li>
<NavLink
  to="/favorites"
  className={({ isActive, isPending }) => 
  isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Favorites
</NavLink>
           </li>
                <li>
<NavLink
  to="/login"
  className={({ isActive, isPending }) => 
  isPending ? "pending" : isActive ? "text-green-400 underline" : ""}>Login
</NavLink>
           </li>
            </ul>
          </nav>
        </div>
    );
};

export default NavBar;