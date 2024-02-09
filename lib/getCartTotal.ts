import { Product } from "@/typings/productTypings"; // Make sure this file exists

export function getCartTotal(products: Product[]): string {
  if (!products.length) {
    return "No products in cart";
  }

  const total = products.reduce((acc: number, product: Product) => {
    const price = typeof product.price === "string" ? parseFloat(product.price) : product.price;
    return acc + price;
  }, 0);

  const currency = products[0].currency;
  return `${currency} ${total.toFixed(2)}`;
}

