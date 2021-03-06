import React, { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://limitless-hollows-74908.herokuapp.com/getAllProducts")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="row">
      {products.length ? (
        ""
      ) : (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="info" />
        </div>
      )}
      {products?.map((product) => (
        <div
          className="col-12 col-md-4 pb-5 d-flex justify-content-center"
          key={product._id}
        >
          <Link
            className="text-decoration-none text-secondary"
            to={`/singleProductDetail/${product._id}`}
          >
            <Card
              style={{ width: "18rem", minHeight: "26rem" }}
              className="cardHover"
            >
              <Card.Img
                style={{
                  height: "18rem",
                  border: "1px solid lightGray",
                  padding: "10px",
                }}
                variant="top"
                src={product.url}
              />
              <div className="p-3 ">
                <div className="">
                  <h5 className="text-secondary">{product.name}</h5>
                  <small className="p-0 m-0 text-secondary ">
                    <Rating
                      readonly
                      initialRating={product.star}
                      emptySymbol="bi bi-star ratingEmpty"
                      fullSymbol="bi bi-star-fill ratingFull"
                    />
                  </small>
                  <p className="p-0 m-0 text-secondary">$ {product.price}</p>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AllCategories;
