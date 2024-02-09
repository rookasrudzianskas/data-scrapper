import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Grid2X2, Heart, LayoutGrid, Search, ShoppingCart, User} from "lucide-react";

const Header = ({}) => {
  return (
    <header className={'flex flex-col md:flex-row bg-walmarkt items-center px-10 py-7 space-x-5'}>
      <Link href={'/'} className="mb-5 md:mb-0">
        <Image
          src={'https://links.papareact.com/yur'}
          alt={'logo'}
          width={150}
          height={150}
        />
      </Link>

      <form className={"flex items-center bg-white rounded-full w-full flex-1"}>
        <input type="text" className={'flex-1 px-4 rounded-l-full outline-none placeholder:text-sm'} placeholder="Search Everything"/>
        <button className={''} type="submit" >
          <Search className="h-10 rounded-full px-2 w-10 bg-yellow-400 cursor-pointer" />
        </button>
      </form>

      <div className={'space-x-5 flex mt-5 md:mt-0'}>
        <Link href={'/'} className={'hidden xl:flex text-white font-bold items-center space-x-2 text-sm'}>
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>

        <Link href={'/'} className={'hidden xl:flex text-white font-bold items-center space-x-2 text-sm'}>
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>

        <Link href={'/'} className={'flex text-white font-bold items-center space-x-2 text-sm'}>
          <Heart size={20}/>
          <div>
            <p className={'text-xs font-extralight'}>My items</p>
            <p>reorder</p>
          </div>
        </Link>

        <Link href={'/'} className={'flex text-white font-bold items-center space-x-2 text-sm'}>
        <User size={20} />
          <div>
            <p className={'text-xs font-extralight'}>Sign In</p>
            <p>My account</p>
          </div>
        </Link>

        <Link href={'/'} className={'flex text-white font-bold items-center space-x-2 text-sm'}>
          <ShoppingCart size={20} />
          <div>
            <p className={'text-xs font-extralight'}>No Items</p>
            <p>$0.00</p>
          </div>
        </Link>
      </div>

    </header>
  );
};

export default Header;
// by Rokas with ❤️
