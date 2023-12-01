import Image from "next/image";
import React from "react";
import getData from "@/lib/getData.ts";
import { Item } from "@/type";

const Product = async () => {
  const items = await getData();

  return (
    <div className="products">
      {items?.map((item: Item) => (
        <div className="product" key={item.id}>
          <div className="product-container">
            <Image
              alt="Card background"
              className="product_image"
              src={item.featuredImage}
              width={400}
              height={300}
            />
          </div>
          <div className="product_data">
            <small>{item.brand}</small>
            <h4>{item.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
