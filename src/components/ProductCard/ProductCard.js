import ViewProductButton from "../ViewProductButton/ViewProductButton";
import "./productCard.sass";
import { useEffect, useState } from "react";

export default function ProductCard({ product }) {
  //Example of a product card: https://dribbble.com/shots/15208151-Furniture-shop-Product-card-design

  const [string, setString] = useState(product.description);

  useEffect(() => {
    const regex = /(<([^>]+)>)/gi;
    const newString = string.replace(regex, "");
    setString(newString);
  }, []);

  return (
    <div className="product_wrapper">
      <h4 className="product_name">{product.name}</h4>
      <img
        className="product_card_image"
        src={product.image.url}
        alt={product.name}
      ></img>
      <div className="product_details">
        <p className="product_description">{string}</p>
        <h3 className="product_price">{product.price.formatted_with_symbol}</h3>
        <ViewProductButton productPermaLink={product.permalink} productImage={product.image}/>
      </div>
    </div>
  );
}
