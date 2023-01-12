import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
 const navLinks = links.map
  return <nav>{
    <>  
    <a href="#home"> {links[0]} home</a>
    <a href="#about"> {links[1]} about </a>
    <a href="#projects"> {links[2]} projects </a>
    </>
  }
  </nav>;
}

export default NavBar;
