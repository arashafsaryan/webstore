import React, { useState } from "react";
import styled from "styled-components";
import { Container, Grid, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { PiPhoneCallLight } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const MenuItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuItem = styled.div`
  position: relative;
  padding-left: 10px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #f7763d;
  }
  &:hover > div {
    display: block;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: 30px;
  right: -60px;
  display: none;
  color: #000000;
  width: 80vw !important;
  padding: 10px;
  z-index: 1000;
  background: #ffffff7c;
  border-radius: 5px;
  box-shadow: 0 4px 30px #00000019;
  backdrop-filter: blur(9.3px);
  -webkit-backdrop-filter: blur(9.3px);
  border: 1px solid #ffffff49;
  @media (max-width: 768px) {
    position: static;
    width: 100%;
    padding: 0;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  }
`;

const SubMenuGrid = styled(Grid)`
  padding: 10px;
`;

const SubMenuItem = styled.div`
  padding: 10px;

  &:hover {
    background-color: #ff996e;
    color: #ffffff;
    border-radius: 5px;
  }
`;

const HamburgerMenuIcon = styled(IconButton)`
  display: none !important;
  background-color: #f7763d !important;
  border-radius: 5px !important;

  @media (max-width: 768px) {
    display: inline-flex !important;
    margin-left: auto;
  }
`;

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  padding: 5px;
  border: 2px dashed #f7763d;
  border-radius: 5px;

  @media (min-width: 769px) {
    display: none !important;
  }
`;

const MobileMenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #ffffff;
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
  a{
    color: #000;
  }
`;

const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  font-weight: bold;

  svg {
    font-size: 20px;
    margin-left: 5px;
  }
  span {
    color: #f7763d;
    margin-right: 5px;
  }
  @media (max-width: 604px) {
    display: none;
  }
`;
const ArrowDown = styled(IoIosArrowDown)`
  vertical-align: -4px;
  font-weight: 400;
`;

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  return (
    <Container maxWidth="lg">
      <Grid container mt={2}>
        <Grid item xs={12} sm={8}>
          <MenuItemsContainer>
            <DesktopMenu>
              <Link to="/">
                <MenuItem>خانه</MenuItem>
              </Link>
              <MenuItem
                onMouseEnter={() => setSubmenuOpen(true)}
                onMouseLeave={() => setSubmenuOpen(false)}
              >
                فروشگاه <ArrowDown />
                <SubMenu isOpen={submenuOpen}>
                  <SubMenuGrid container spacing={2}>
                    {Array.from({ length: 20 }).map((_, index) => (
                      <Grid item xs={6} sm={3} key={index}>
                        <SubMenuItem>{`آیتم ${index + 1}`}</SubMenuItem>
                      </Grid>
                    ))}
                  </SubMenuGrid>
                </SubMenu>
              </MenuItem>
              <MenuItem>وبلاگ</MenuItem>
              <MenuItem>تماس با ما</MenuItem>
              <MenuItem>درباره ما</MenuItem>
            </DesktopMenu>
            <HamburgerMenuIcon onClick={toggleMobileMenu}>
              <MenuIcon style={{ color: "white" }} />
            </HamburgerMenuIcon>
          </MenuItemsContainer>
          <MobileMenuContainer
            style={{ display: mobileMenuOpen ? "flex" : "none" }}
          >
            <MobileMenuItem>خانه</MobileMenuItem>
            <MobileMenuItem onClick={toggleSubmenu}>
              فروشگاه <ArrowDown />
              <SubMenu isOpen={submenuOpen}>
                <SubMenuGrid container spacing={2}>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <Grid item xs={6} sm={3} key={index}>
                      <SubMenuItem>{`آیتم ${index + 1}`}</SubMenuItem>
                    </Grid>
                  ))}
                </SubMenuGrid>
              </SubMenu>
            </MobileMenuItem>
            <MobileMenuItem>وبلاگ</MobileMenuItem>
            <MobileMenuItem>تماس با ما</MobileMenuItem>
            <MobileMenuItem>درباره ما</MobileMenuItem>
          </MobileMenuContainer>
        </Grid>
        <Grid item xs={4}>
          <PhoneContainer>
            <PiPhoneCallLight />
            شماره تلفن :<span>09215365520</span>
          </PhoneContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NavBar;
