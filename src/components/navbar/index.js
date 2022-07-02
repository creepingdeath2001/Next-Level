import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavBarElements'

const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          NextLevel
        </NavLogo>
        <MobileIcon onClick={toggle}>
          {/* hamburger menu */}
          <FaBars />
        </MobileIcon>

      {/* menuitems here */}
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>

          <NavItem>
            <NavLinks to="signup">Sign-up</NavLinks>
          </NavItem>

        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/signin"> Sign In</NavBtnLink>
        </NavBtn>
        
      </NavbarContainer>
    </Nav>
    
    
    
    
    
    </>
  )
}

export default Navbar;