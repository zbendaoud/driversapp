import React from "react";
import logo from '../assets/logo.png'
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-[#006C52]">
      <div className="wrapper">
        <Image src={logo} className="lg:max-w-[200px] md:max-w-[150px] " />
      </div>
    </header>
  );
};

export default Navbar;
