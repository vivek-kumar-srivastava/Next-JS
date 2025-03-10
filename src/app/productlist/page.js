"use client";
import { useState, useEffect } from "react";

export default function ProductList() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      let data = await fetch("https://dummyjson.com/products");
      data = await data.json();
      console.log(data);
      setProduct(data.products);
      console.log("Data.Products is:");
      console.log(data.products);
    };
    fetchdata();
  }, []);

  return (
    <div>
      <center>
        <h1 className="font-bold text-3xl underline">Product list</h1>
        <br />
        {product.map((item) => {
          return (
            <h3>
              Product Name:{item.title}
              <br />
              Product Price:{item.price}$
              <br />
              <br />
            </h3>
          );
        })}
      </center>
    </div>
  );
}
