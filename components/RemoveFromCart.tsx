"use client";

import React from 'react';
import {Product} from "@/typings/productTypings";
import useCartStore from "@/store";
import {Button} from "@/components/ui/button";

const RemoveFromCart = ({product}: { product: Product}) => {
  const removeFromCart = useCartStore(state => state.removeFromCart);

  const handleRemove = () => {
    console.log('removing from cart');
    removeFromCart(product);
  }

  return (
    <Button className={'bg-walmarkt hover:bg-walmarkt/50'} onClick={handleRemove}>
      -
    </Button>
  );
};

export default RemoveFromCart;
// by Rokas with ❤️
