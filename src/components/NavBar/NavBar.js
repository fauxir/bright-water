import { Link } from "react-router-dom";
import "./navBar.sass";

export default function NavBar({ navItems }) {
  return (
    <div className="navbar_wrapper">
      <div className="bw_wrapper">
        <h2 className="navbar_bw">BW</h2>
      </div>
      <ul className="navbar_items">
        {navItems.map((item, index) => (
          <Link className="nav_link" to={item.link} key={index}>
            {item.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
