import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import slider from "../constants/slider";
import { Container, Grid } from "@mui/material";
import { FiPlusSquare } from "react-icons/fi";
import { TiTickOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

const ProductCard = styled.div`
  border: 2px dashed #e2e2e2;
  border-radius: 10px;
  text-align: center;
  padding: 20px;
  background-color: #fff;
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 2px dashed #ff5722;
    background-color: #fff8f5;
  }
  &:hover button {
    background-color: #ff5722;
  }
  &:hover div {
    color: #ff5722;
  }
`;

const ProductImage = styled.img`
  width: 150px;
  height: 150px;
  margin-bottom: 10px;
`;

const ProductTitle = styled.h3`
  font-size: 17px;
  font-weight: 600;
  text-align: start;
  color: #666666;
  line-height: 25px;
  margin: 10px 0;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #79af79;
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  transition: all 0.3s ease-in-out;
`;

const Button = styled.button`
  width: 100%;
  background-color: ${(props) => (props.$inCart ? "#4caf50" : "#2196f3")};
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  svg {
    margin-left: 5px;
    font-size: 20px;
    vertical-align: -5px;
  }
  span {
    margin-left: 5px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const ViewAll = styled.a`
  color: #f57c00;
  cursor: pointer;
  font-weight: 600;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: 720;
  color: #000;
`;

const Slider = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);
  console.log(cartItems);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  return (
    <Container maxWidth="lg">
      <Grid container mt={5}>
        <Grid item xs={12}>
          <Header>
            <Title>جدیدترین محصولات</Title>
            <ViewAll>مشاهده همه</ViewAll>
          </Header>
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={4}
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1.3 },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {slider.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductCard>
                  <ProductImage src={item.img} alt="img" />
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>
                    <span>قیمت:</span>{" "}
                    <span>{item.price.toLocaleString()} تومان</span>
                  </ProductPrice>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    $inCart={cartItems.some((i) => i.id === item.id)}
                  >
                    <span>
                      {cartItems.some((i) => i.id === item.id) ? (
                        <span>
                          <TiTickOutline /> به سبد خرید اضافه شد{" "}
                        </span>
                      ) : (
                        <span>
                          {" "}
                          <FiPlusSquare /> افزودن به سبد خرید
                        </span>
                      )}
                    </span>
                  </Button>
                </ProductCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Slider;
