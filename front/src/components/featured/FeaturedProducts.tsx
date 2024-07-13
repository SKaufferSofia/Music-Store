"use client";

import IProduct from "../products/types";
import { CardProductFeatured } from "../featured/utils";

export const ProductFeatured = ({ products }: { products: IProduct[] }) => {
  let productsFeatured = [products[2], products[5], products[7], products[17]];
  return (
    <div className=" m-10 flex justify-between flex-col">
      <h1 className="text-2xl text-pink-500 font-semibold m-6 text-center">
        Product Featured
      </h1>
      <div className="mx-auto max-w-2xl px-4 py-0 sm:px-6 sm:py-0 lg:max-w-7xl lg:px-8 ">
        <div className="flex gap-3">
          {productsFeatured.map((product: IProduct) => (
            <CardProductFeatured
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
