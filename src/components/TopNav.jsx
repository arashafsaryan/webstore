import { Avatar, Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import logo from "../images/logo.png";
import tick from "../images/Tick.png";
import group from "../images/Group.png";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartSimple } from "react-icons/pi";
import { GoHeart } from "react-icons/go";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 45px;
  }
  p {
    font-size: 20px;
    font-weight: 600;
    color: #f7763d;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 0;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px 10px 40px;
  font-size: 16px;
  font-family: inherit;
  font-size: 13px;
  border: none;
  background-color: #f2f2f2;
  border-radius: 25px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #f7763d;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  left: 5px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
  background-color: #5124c4;
  padding: 5px;
  border-radius: 50%;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #007bff;
  }
`;
const Div = styled.div`
  display: flex;
  justify-content: space-around;
  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;
const Guarantee = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: fit-content;
  }
  div {
    margin-right: 10px;
    :nth-child(1) {
      color: #000000;
      font-size: 13px;
      font-weight: 600;
    }
    :nth-child(2) {
      color: #bcbcbc;
      font-size: 11px;
      font-weight: 600;
    }
  }
`;
const Pages = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CartContainer = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CartIcon = styled(PiShoppingCartSimple)`
  font-size: 30px;
  color: #333;
`;

const Badge = styled.span`
  position: absolute;
  width: 16px;
  height: 16px;
  top: -3px;
  right: -8px;
  background-color: #f7763d;
  color: #fff;
  border-radius: 50px;
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeartIcon = styled(GoHeart)`
  font-size: 30px;
  color: #333;
  cursor: pointer;
`;
const SignUpIcon = styled(AiOutlineUser)`
  font-size: 30px;
  color: #333;
  cursor: pointer;
`;
const TopNav = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  console.log(itemCount);
  const guarantee = [
    {
      id: 1,
      img: tick,
      titleOne: "ضمانت اصالت کالا",
      titleTwo: "100% تضمین اصالت",
    },
    { id: 2, img: group, titleOne: "ارسال رایگان", titleTwo: "تمامی خرید‌ها" },
  ];

  return (
    <Container maxWidth="lg">
      <Grid container mt={2} spacing={2}>
        <Grid item xs={4} sm={2} md={2} mb={2}>
          <Link to="/">
            <Logo >
              <img src={logo} alt="" />
              <Typography component="p" variant="p" mr={1}>
                شاپت
              </Typography>
            </Logo>
          </Link>
        </Grid>
        <Grid item xs={8} sm={5} md={4} mb={2}>
          <SearchContainer>
            <SearchButton>
              <CiSearch />
            </SearchButton>
            <SearchInput
              type="text"
              placeholder="محصول مورد‌نظر را جستجو کنید..."
            />
          </SearchContainer>
        </Grid>
        <Grid item xs={12} sm={5} md={4} mb={2}>
          <Div>
            {guarantee.map((item) => (
              <Guarantee key={item.id}>
                <img src={item.img} alt="Guarantee" />
                <div>
                  <Typography component="p" variant="p">
                    {item.titleOne}
                  </Typography>
                  <Typography component="p" variant="p">
                    {item.titleTwo}
                  </Typography>
                </div>
              </Guarantee>
            ))}
          </Div>
        </Grid>
        <Grid item xs={12} md={2} mb={2}>
          <Pages>
            <CartContainer to="/checkout">
              <CartIcon />
              {itemCount > 0 && <Badge> {itemCount}</Badge>}
            </CartContainer>
            <HeartIcon />
            <SignUpIcon />
          </Pages>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopNav;
