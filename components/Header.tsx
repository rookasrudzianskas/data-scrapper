import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = ({}) => {
  return (
    <header>
      <Link href={'/'} className="">
        <Image
          src={'https://links.papareact.com/xsi'}
          alt={'logo'}
          width={150}
          height={150}
        />
      </Link>


    </header>
  );
};

export default Header;
// by Rokas with ❤️
