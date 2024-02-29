// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const NavbarContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 2rem 3rem;
//   background-color: transparent;
// `;

// const NavbarBrand = styled.h1`
//   font-weight: bold;
//   font-size: 40px;
//   margin-right: auto;
//   color: rgb(1, 149, 255);
// `;

// const NavbarLink = styled(Link)`
//   text-decoration: none;
//   color: #333333;
//   margin-right: 20px;
//   font-weight: 500;
//   font-size: 1rem;

//   &:hover {
//     color: rgb(1, 149, 255);
//     transition: 0.3s ease-in-out;
//   }

//   &:last-child {
//     margin-right: 0;
//   }
// `;

// const Navbar = () => {
//   return (
//     <NavbarContainer>
//       <NavbarBrand>ADR</NavbarBrand>
//       <NavbarLink to="/">Home</NavbarLink>
//       <NavbarLink to="/components">Components</NavbarLink>
//       {/* Tambahkan lebih banyak link sesuai kebutuhan */}
//     </NavbarContainer>
//   );
// };

// export default Navbar;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrap = styled.nav`
  display: flex;
  box-shadow: 0px 5px 10px 0px #aaa;
  width: 100%;
  position: fixed;
  background: #007bff;
  color: white;
  z-index: 100;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 64px;
  align-items: center;
  padding: 2px 4px;
  max-width: 1200px;
  width: 90%;
  margin: auto;
`;

const MenuItems = styled.ul`
  order: 2;
  display: flex;
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
`;

const MenuItemsLi = styled(Link)`
  list-style: none;
  margin-left: 1.5rem;
  font-size: 1.3rem;
  text-decoration: none;
  color: white;
`;

const Logo = styled.h1`
  order: 1;
  color: white;
  font-size: 2.3rem;
  margin-right: 10px; /* Corrected the typo 'reight' to 'right' and adjusted the margin */
`;

function Navbar() {
  return (
    <NavbarWrap>
      <NavbarContainer>
        <MenuItems>
          <MenuItemsLi to="/">Home</MenuItemsLi>
          <MenuItemsLi to="/components">Component</MenuItemsLi>
          <MenuItemsLi>Contact</MenuItemsLi>
        </MenuItems>
        <Logo>ADR</Logo>
      </NavbarContainer>
    </NavbarWrap>
  );
}

export default Navbar;
