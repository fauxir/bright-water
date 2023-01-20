import { useParams } from "react-router-dom";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";
import "./productPage.sass";

export default function ProductPage() {
  const [products, setProducts] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescripion] = useState("");
  const [price, setPrice] = useState("");
  const [count, setCount] = useState(0);

  //Pull permalink from url
  const { id } = useParams();
  const productPermaLink = id.toString();

  const regex = /(<([^>]+)>)/gi;

  //Fetching product by permalink
  const fetchPermalink = () => {
    commerce.products
      .retrieve(productPermaLink, { type: "permalink" })
      .then((product) => {
        setProducts(product);
        setImageUrl(product.image.url);
        setDescripion(product.description.replace(regex, ""));
        setPrice(product.price.formatted_with_symbol);
      })
      .catch((error) => {
        console.log("There was an error fetching the products", error);
      });
  };

  useEffect(() => {
    fetchPermalink();
  }, []);

  const handleIncrement = () => {
    setCount(c => c + 1);
  };

  const handleDecrement = () => {
    setCount(c => Math.max(c - 1, 0));
  };

  return (
    <div className="product_page_wrapper">
      <div className="product_wrapper_view">
        <img
          className="product_image_view"
          src={imageUrl}
          alt={products.name}
        ></img>
        <div className="product_text">
          <h1 className="product_name_page">{products.name}</h1>
          <p className="product_description_page">Description: {description}</p>
          <p className="product_price_page">Price: {price}</p>
          <div className="counter_wrapper">
            <div className="line"></div>
            <div className="counter">
              <button className="count_control" onClick={handleIncrement}>+</button>
              <p className="count">{count}</p>
              <button className="count_control" onClick={handleDecrement}>-</button>
            </div>
            <div className="line"></div>
          </div>
          <button className="add_to_cart_btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}
