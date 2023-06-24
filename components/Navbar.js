"use client";
import Link from "next/link";
import React from "react";
import { useRef } from "react";
import { AiOutlineShoppingCart, AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const toggleCart = () => {};

  const ref = useRef();
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
      <div onClick={toggleCart} className="cart absolute right-0 mx-2 ">
        <AiOutlineShoppingCart className="text-xl md:text-3xl" />
      </div>
      <div
        ref={ref}
        className="sidebar absolute top-0 right-0 bg-pink-100 p-10 transform transition-transform translate-x-full"
      >
        <h2 className="font-bold text-xl">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className="absolute top-2 right-2 cursor-pointer"
        >
          <AiFillCloseCircle />
        </span>
        <ol>
          <li>
            <span>Tshirt - Wear the code</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Navbar;
