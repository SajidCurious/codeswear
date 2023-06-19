import React from "react";

const Navbar = () => {
  return (
    <div className="py-2 flex flex-col md:flex-row items-center">
      <div className="logo">
        <span className="ml-3 text-xl font-semibold">CODESWEAR.COM</span>
      </div>
      <div className="nav">
        <ul className="flex">
          <li>Tshirts</li>
          <li>Hoodies</li>
          <li>Stickers</li>
          <li>Mugs</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
