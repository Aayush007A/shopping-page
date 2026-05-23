export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string; // emoji or local asset
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
