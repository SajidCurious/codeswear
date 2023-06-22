import Link from "next/link";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="py-2 flex flex-col md:flex-row items-center md:justify-start">
      <div className="logo">
        <Link href={"/"}>
          <span className="ml-3 text-xl font-bold mx-5 cursor-pointer">
            CODESWEAR.COM
          </span>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex space-x-6 font-bold md:text-md">
          <Link href={"/tshirts"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/hoodies"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/stickers"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/mugs"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-2 ">
        <AiOutlineShoppingCart className="text-xl md:text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
