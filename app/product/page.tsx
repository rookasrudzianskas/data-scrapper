import React from 'react';
import fetchProduct from "@/lib/fetchProduct";

type Props = {
  searchParams: {
    url: string;
  }
}

const ProductPage = async ({searchParams: { url } }: Props) => {
  const product = await fetchProduct(url);
  console.log(product)

  return (
    <div>

    </div>
  );
};

export default ProductPage;
// by Rokas with ❤️
