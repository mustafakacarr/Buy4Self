import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useCart } from "../context/CartDropdownContext";
import StarRating from  "../components/StarRating";

const ProductCard = (props) => {
  const { data: product } = props;
  const { putCart } = useCart();

  const addToCartHandler = (productId) => {
    console.log("🚀 ~ file: ProductCard.js:11 ~ addToCartHandler ~ productId:", productId)
    putCart();
  };
  return (
    <div className="card mt-3">
      <a href={`product/${product.id}`} target="_blank" rel="noopener noreferrer">
        {" "}
        <img src={product.img} className="card-img-top img-fluid" alt="..." />
      </a>
      <div className="card-body ">
        <h5 className="card-title">
          {" "}
          <a
            href={`product/${product.id}`}
            className="text-decoration-none text-dark"
          >
            {product.name}
          </a>
        </h5>
        <div className="mb-2">
          <StarRating />
        </div>
        <a href="products?category=kategori">
          {" "}
          <span className="badge rounded-pill text-bg-light mb-2">
            {product.category.name}
          </span>
        </a>
        <div className="productPrice mb-1 text-center text-third fs-5 fw-bold">
          {" "}
          {product.price} TL
        </div>

        <div className="pt-2">
          <div
            className="btn btn-success col-12"
            onClick={() => addToCartHandler(product.id)}
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
