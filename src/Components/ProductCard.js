import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const ProductCard = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img
            src="images/watch.jpg"
            className="img-fluid"
            alt="product image"
          />
          <img
            src="images/watch-01.jpg"
            className="img-fluid"
            alt="product image"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Apple</h6>
          <h5 className="product-title">Student Package Get 20% off</h5>
          <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={24}
            value={3}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">Rs. 500</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src="images/prodcompare.svg" alt="compare" />
            </Link>
            <Link>
              <img src="images/view.svg" alt="view" />
            </Link>
            <Link>
              <img src="images/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
