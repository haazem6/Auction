import React from 'react';
import './Actionbar.css'; 
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './ActionbarElements';

const Actionbar = () => {
  return (
    <>
      <Nav>
        
        
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
             Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
             Up
          </NavLink>
          {/* Second Nav */}
           
        </NavMenu>
       
      </Nav>
    </>
  );
};

export default Actionbar;
