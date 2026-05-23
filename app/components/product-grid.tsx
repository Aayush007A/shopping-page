"use client";

import type { FC } from "react";
import { Product } from "@/lib/types";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

export const ProductGrid: FC<ProductGridProps> = ({ products, addToCart }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-card rounded-lg shadow-sm p-5 flex flex-col gap-3 border border-border hover:shadow-md transition"
        >
          <div className="text-5xl mb-2" aria-label={product.name}>
            {product.image}
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-1 leading-tight">
              {product.name}
            </h2>
            <p className="text-muted-foreground text-sm mb-2">
              {product.description}
            </p>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold text-xl">${product.price}</span>
            <Button
              variant="secondary"
              onClick={() => addToCart(product)}
              className="font-medium"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
