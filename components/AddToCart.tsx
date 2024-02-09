"use client";

import React from 'react';
import {Product} from "@/typings/productTypings";
import useCartStore from "@/store";
import {Button} from "@/components/ui/button";
import RemoveFromCart from "@/components/RemoveFromCart";

const AddToCart = ({product}: { product: Product}) => {
  const [cart, addToCart] = useCartStore(state => [state.cart, state.addToCart]);

  console.log(cart);
  const howManyInCart = cart.filter((p) => p.meta.sku === product.meta.sku).length;
  console.log(howManyInCart, 'howManyInCart');

  const handleAdd = () => {
    console.log('adding to cart');
    addToCart(product);
  }

  if(howManyInCart > 0) {
    return (
      <div className={'flex space-x-5 items-center'}>
        <RemoveFromCart product={product} />
        <span>{howManyInCart}</span>
        <Button className={'bg-walmarkt hover:bg-walmarkt/50'} onClick={handleAdd}>
          +
        </Button>
      </div>
    )
  }

  return (
    <Button onClick={handleAdd}>
      Add to cart
    </Button>
  );
};

export default AddToCart;
// by Rokas with ❤️
