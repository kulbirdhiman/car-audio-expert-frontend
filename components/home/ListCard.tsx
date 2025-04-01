import React from "react";
import Card from "./Card";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  inStock: boolean;
  paymentMethods: string[];
}

interface ListCardProps {
  products: Product[]; // Ensure `products` is an array of Product type
}
const ListCard: React.FC<ListCardProps> = ({ products }) => {
  console.log("this is product data",products)
  if (!products || products.length === 0) {
    return <p>No products available.</p>; // Handle empty or undefined products
  }

  return (
    <div className="p-2 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ListCard;
