import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { increase, decrease, removeFromCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { MdNumbers } from "react-icons/md";
import { MdOutlinePriceChange } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";

const Empty = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #f7763d;
    font-size: 20px;
  }
  a {
    margin-top: 15px;
    background-color: #f7763d;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 5px;
  }
`;
const Title = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
`;
const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ff5722;
  padding: 10px 0;
  margin: 20px 0;
  @media (max-width: 600px) {
    flex-direction: column;
    .title,
    .price,
    img,
    button {
      margin: 10px 0;
    }
  }
  img {
    max-width: 120px;
  }
  .title {
    color: #2e2e2e;
    margin: 10px 0;
  }
  .quantity {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .quantity span {
    margin: 0 10px;
  }
  button {
    border: 0;
    padding: 3px 8px;
    cursor: pointer;
  }
`;
const OrderDetails = styled.div`
  margin-top: 15px;
  border: 1px solid #ff5722;
  padding: 5px 10px;
  border-radius: 10px;
  p {
    color: #ff5722;
    margin-top: 10px;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px dashed #ff4107;
  }
  div {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
  }
  svg {
    vertical-align: -7px;

    color: #ff4107;
    font-size: 20px;
  }
  button {
    border: 0;
    background-color: #ff5722;
    color: #fff;
    width: 100%;
    padding: 10px 0;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:hover {
      background-color: #ff4107;
    }
  }
`;

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  const sumPrice = useSelector((store) => store.cart.totalPrice);
  const quantity = useSelector((store) => store.cart.totalQuantity);
  console.log(cartItems);
  console.log(sumPrice.toLocaleString());
  console.log(quantity);

  if (!cartItems.length)
    return (
      <Container maxWidth="lg">
        <Grid container>
          <Empty>
            <p>سبد خرید خالی می‌باشد🥲</p>
            <Link to="/">بازگشت به فروشگاه</Link>
          </Empty>
        </Grid>
      </Container>
    );

  return (
    <Container maxWidth="lg">
      <Title>سبد خرید شما</Title>
      <Grid container mt={5} justifyContent="space-between">
        <Grid item xs={12} md={7.5}>
          {cartItems.map((item) => (
            <Items key={item.id}>
              <img src={item.img} alt="imgProduct" />
              <Typography className="title" component="p" variant="p">
                {item.title}
              </Typography>
              <Typography className="price" component="p" variant="p">
                {item.price.toLocaleString()} تومان
              </Typography>
              <div className="quantity">
                <button onClick={() => dispatch(increase(item))}>+</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(decrease(item))}>
                  {item.quantity > 1 ? "-" : "🗑️"}
                </button>
              </div>
            </Items>
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <OrderDetails>
            <Typography component="p" variant="p" pb={1}>
              جزییات سفارش شما
            </Typography>
            <div>
              <Typography component="span" variant="span">
                <MdNumbers /> تعداد محصول
              </Typography>
              <Typography component="span" variant="span">
                {quantity}
              </Typography>
            </div>
            <div>
              <Typography component="span" variant="span">
                <MdOutlinePriceChange /> مبلغ کل
              </Typography>
              <Typography component="span" variant="span">
                {sumPrice.toLocaleString()} تومان
              </Typography>
            </div>
            <div>
              <Typography component="span" variant="span">
                <GrStatusUnknown /> وضعیت
              </Typography>
              <Typography component="span" variant="span">
                در حال سفارش...
              </Typography>
            </div>
            <div>
              <button>پرداخت و ثبت نهایی</button>
            </div>
          </OrderDetails>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingCart;
