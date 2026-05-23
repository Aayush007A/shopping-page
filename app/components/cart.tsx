"use client";

import type { FC } from "react";
import { CartItem } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface CartProps {
  cart: CartItem[];
  removeFromCart: (productId: string) => void;
}

export const Cart: FC<CartProps> = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="bg-card rounded-lg shadow-sm p-4 border border-border">
      <h3 className="text-lg font-semibold mb-3">Cart</h3>
      {cart.length === 0 ? (
        <p className="text-muted-foreground text-sm">Your cart is empty.</p>
      ) : (
        <ul className="flex flex-col gap-3">
          {cart.map((item) => (
            <li key={item.product.id} className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl" aria-label={item.product.name}>{item.product.image}</span>
                <span className="font-medium">{item.product.name}</span>
                <span className="text-muted-foreground text-xs ml-2">x{item.quantity}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">${item.product.price * item.quantity}</span>
                <Button
                  size="icon"
                  variant="ghost"
                  aria-label={`Remove ${item.product.name}`}
                  onClick={() => removeFromCart(item.product.id)}
                >
                  <Trash2 className="text-destructive" />
                </Button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex items-center justify-between border-t pt-3">
        <span className="font-semibold">Total</span>
        <span className="font-bold text-lg">${total}</span>
      </div>
    </div>
  );
};
