import ProductCard from "../ProductCard/ProductCard";
import "./productList.sass";

//Example of a product list: https://www.edinburghgin.com/shop/london-dry
export default function ProductList({ products }) {

  return (
    <div className="product_list_wrapper">
      <h2 className="product_list_title">BrightWater Collections</h2>
      <div className="product_card_wrapper">
        {products.map((product) => (
          <ProductCard className="product_card" key={product.id} product={product}/>
        ))}
      </div>
    </div>
  );
}
