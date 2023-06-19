import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="py-2 flex flex-col md:flex-row items-center md:justify-start">
      <div className="logo">
        <span className="ml-3 text-xl font-semibold mx-5">CODESWEAR.COM</span>
      </div>
      <div className="nav">
        <ul className="flex space-x-2 font-bold md:text-xl">
          <Link href={"/"}>
            <li>Tshirts</li>
          </Link>
          <Link href={"/"}>
            <li>Hoodies</li>
          </Link>
          <Link href={"/"}>
            <li>Stickers</li>
          </Link>
          <Link href={"/"}>
            <li>Mugs</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-2 ">
        <button className="font-bold">Cart</button>
      </div>
    </div>
  );
};

export default Navbar;
