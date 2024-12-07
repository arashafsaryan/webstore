import React from "react";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import MainNav from "../components/MainNav";

const Discount = styled.div`
  background-color: #f7763d;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
  padding: 10px 0;
  span {
    background-color: #fff;
    color: #f7763d;
    margin: 0 5px;
    padding: 0px 8px;
    border-radius: 20px;
  }
`;

const Navbar = () => {
  return (
    <>
      <Discount>
        <span> تا 50% </span> تخفیف برای تمامی محصولات
      </Discount>
      <TopNav />
      <MainNav />
    </>
  );
};

export default Navbar;
