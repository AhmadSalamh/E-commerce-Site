import { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import "./Products.css";
import StoreContext from "../hooks/storeContext";
import { addToCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";

function Products() {
  const [products, setProducts] = useState([]);
  const { filter } = useContext(StoreContext);
  const { data, loading } = useFetch(filter);

  const dispatch = useDispatch()

  useEffect(() => {
    data && setProducts(data);
  }, [data]);

  return (
    <div className="flex">
      <h1>Our Products</h1>
      <div>
        {loading
          ? "loading..."
          : products.map((product) => (
            <div key={product.id}>
              <h2>{product.attributes.title}</h2>
              <img
                src={
                  import.meta.env.VITE_APP_URL +
                  product.attributes.image.data.attributes.url
                }
                alt=""
              />
              <span>{product.attributes.price}</span>
              <p>{product.attributes.desc}</p>
              <button className="product-btn" onClick={() => dispatch(addToCart({
                id: product.id,
                title: product.attributes.title,
                desc: product.attributes.desc,
                price: product.attributes.price,
                image: product.attributes.image.data.attributes.url
              }))}>add to cart</button>
            </div>
          ))}
      </div>
    </div>
  );
}
export default Products;