import React, { useState } from "react";
import NavItems from "../components/ui/navbar/NavItems";
import Hamburger from "../components/ui/hamburger/Hamburger";
import SocialIcons from "../components/ui/social-icons/SocialIcons";
import Logo from "../components/ui/logo/Logo";
import Header from "../components/layout/Header";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <Header>
      <Logo />
      <NavItems ulClassName="hidden md:flex" />
      <Hamburger toggle={nav} onClick={handleClick} />
      <NavItems
        ulClassName={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
        liClassname="py-6 text-4xl"
        onClick={handleClick}
      />
      <SocialIcons />
    </Header>
  );
}

export default Navbar;
