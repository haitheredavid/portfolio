import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarelement";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to="/landing" activeStyle>
            HaiThere
          </NavLink>
          <NavLink to="/projects" activeStyle>
            Projects
          </NavLink>
          <NavLink to="/sketches" activeStyle>
            Sketches
          </NavLink>
          <NavLink to="/posts" activeStyle>
            Posts
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
