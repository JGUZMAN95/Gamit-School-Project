
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <div style = {{
      position:'sticky',
      top:'0',
      zIndex:'1',
    }}>
   
      <Nav>
        <NavLink to='/Home'>
          <h1>GAMIT</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/CreatePost' activeStyle>
            Create Post
          </NavLink>
          {/* <NavLink to='/ViewPost' activeStyle>
            View Post
          </NavLink> */}
          <NavLink to='/Contact' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/About' activeStyle>
            About
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/Account'>Sign In/Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>
      <div style = {{
      height:'4px',
      backgroundColor:'white',
      
    }}></div>
    </div>
  );
};

export default Navbar;