"use client";

import React from 'react';
import useCartStore from "@/store";
import {getCartTotal} from "@/lib/getCartTotal";
import {groupedBySKU} from "@/lib/groupedBySKU";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";
import {Button} from "@/components/ui/button";

const Basket = ({}) => {
  const cart = useCartStore(store => store.cart);
  const basketTotal = getCartTotal(cart);
  const grouped = groupedBySKU(cart);

  console.log(grouped);

  return (
    <div className={'max-w-7xl mx-auto'}>
      <ul className={'space-y-5 divide-y-2'}>
        {Object.keys(grouped).map((sku) => {
          const item = grouped[sku][0];
          const total = getCartTotal(grouped[sku])

          return (
            <li className={'p-5 my-2 flex items-center justify-between'} key={sku}>
              {item.images[0] && (
                <Image
                  src={item.images[0]}
                  alt={item.title}
                  width={100}
                  height={100}
                />
              )}

              <div className={'flex space-x-4 pl-4'}>
                <div>
                  <p className={'line-clamp-2 font-bold'}>{item.title}</p>
                  <div className={'line-clamp-1 font-light text-sm mt-'} dangerouslySetInnerHTML={{ __html: item.description }}>

                  </div>

                  <div className={'flex flex-col border rounded-md mt-2 p-5'}>
                    <AddToCart product={item} />
                    <p className={'mt-4 font-bold text-right'}>{total}</p>
                  </div>
                </div>
              </div>

            </li>
          )
        })}
      </ul>

      <div className={'flex flex-col justify-end p-5'}>
        <p className={'font-bold text-2xl text-right text-walmarkt mb-5'}>
          Total: {basketTotal}
        </p>

        <Button className={'mt-5 h-20 bg-walmarkt hover:bg-walmarkt/50'}>
          Checkout
        </Button>
      </div>
    </div>
  );
};

export default Basket;
// by Rokas with ❤️
