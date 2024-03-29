import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Four04 from "../Four404/Four04";
import "./Product.css";
const Product = () => {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();
  useEffect(() => {
    fetch("/iphone.json")
      .then((res) => res.json())
      .then((data) => {
        const productList = data.products;
        const singleProduct = productList.filter(
          (product) => product.product_url === productID
        );
        setProduct(singleProduct);
      })
      .catch(() => {
        console.log("un able to fetch data");
      });
  }, [productID]);
  //console.log(productList);
  console.log(product);
  if (product.length) {
    return (
      <div>
        {" "}
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {product.map((product) => {
              return (
                <div key={product.product_url} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12 mt-5 pt-5">
                      <div className="title-wraper font-weight-bold">
                        {product.product_name}
                      </div>
                      <div className="brief-description">
                        {product.product_brief_description}
                      </div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${product.starting_price}`}
                      </div>
                      <div className="monthly-price">{product.price_range}</div>
                      <div className="product-details">
                        {product.product_description}
                      </div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={product.product_img} alt="apple" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    );
  } else {
    return <Four04 />;
  }
};

export default Product;
