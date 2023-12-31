import Image from "next/image";
import React from "react";
import getData from "@/lib/getData.ts";
import { Item } from "@/type";

const Product = async () => {
  const items = await getData();

  return (
    <div className="products_container">
      {items.map((item: Item) => (
        <div className="products_details" key={item.id}>
          <div className="products_image_container">
            <Image
              alt={item.name}
              className="products_image"
              src={item.featuredImage}
              width={400}
              height={300}
            />
          </div>
          <div className="products_data">
            <small>{item.brand}</small>
            <h4>{item.name}</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
