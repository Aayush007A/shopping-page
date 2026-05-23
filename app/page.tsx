"use client";

import { useState, useMemo } from "react";
import { categories, products } from "@/lib/data";
import { CartItem, Product } from "@/lib/types";
import { CategoryFilter } from "./components/category-filter";
import { ProductGrid } from "./components/product-grid";
import { Cart } from "./components/cart";

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [cart, setCart] = useState<CartItem[]>([]);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return products;
    return products.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <aside className="md:w-1/4 w-full">
        <CategoryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <div className="mt-8">
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </aside>
      <section className="flex-1">
        <h1 className="text-3xl font-bold mb-6 tracking-tight">Store</h1>
        <ProductGrid products={filteredProducts} addToCart={addToCart} />
      </section>
    </div>
  );
}
