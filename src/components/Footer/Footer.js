import { Link } from "react-router-dom";
import classes from "./footer.sass";

export default function Footer({ navItems }) {
  return (
    <div className="footer_wrapper">
      <div className="brand_name_footer">
        <h1 className="footer_title">BW</h1>
        <p className="footer_text_bw">BrightWater</p>
      </div>
      <div className="menu_items_footer">
        <h1 className="footer_title">Menu</h1>
        <ul className="nav_list">
          {navItems.map((item, index) => (
              <Link className="nav_link" key={index} to={item.link}>{item.name}</Link>
          ))}
        </ul>
      </div>
      <div className="contact_details_footer">
        <h1 className="footer_title">Contact details</h1>
        <p className="footer_text">Zero, Colney Heath Lane, St. Albans</p>
        <p className="footer_text">hq@brightwater.co.uk</p>
        <p className="footer_text">0131 496 0948</p>
      </div>
    </div>
  );
}
