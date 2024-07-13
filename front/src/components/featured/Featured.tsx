"use client";

import IProduct from "../products/types";
import { CardFeatured } from "./utils";

const FeaturedComponent = ({ products }: { products: IProduct[] }) => {
  let productsFeatured = [products[15], products[16]];
  return (
    <div className="flex flex-row justify-center">
      {productsFeatured.map((product: IProduct) => (
        <CardFeatured
          key={product.id}
          name={product.name}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default FeaturedComponent;
