import { Link } from "react-router-dom";
import "./viewProductButton.sass";

export default function ViewProductButton({ productPermaLink }) {
  const permaLink = productPermaLink;

  return (
    <div>
      <Link className="view_product" to={`/product/${permaLink}`}>View Product</Link>
    </div>
  );
}
