import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import mainImg from "../images/header/mainHeader.png";
import img1 from "../images/header/img1.png";
import img2 from "../images/header/img2.png";
import img3 from "../images/header/img3.png";
import img4 from "../images/header/img4.png";
import img5 from "../images/header/img5.png";
import img6 from "../images/header/img6.png";

const Wrapper = styled(Grid)`
  position: relative !important;
  background-color: #e0f5ff;
  padding: 15px;
  border-radius: 30px;
`;

const Info = styled.div`
  text-align: right;
  padding: 0 20px;
  @media (min-width: 900px) {
    max-width: 300px;
    padding: 60px 100px 0 0;
  }
  p {
    text-align: justify;
    line-height: 25px;
  }
  a {
    background-color: #5124c4;
    color: #ffffff;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 14px;
  }
`;
const ArrowBack = styled(IoIosArrowBack)`
  vertical-align: -5.5px;
  background-color: #ffffff;
  color: #000;
  border-radius: 20px;
  padding: 2px;
  margin-right: 5px;
`;
const Image = styled.div`
  img {
    width: 350px;
    float: left;
    margin-left: 70px;
    @media (max-width: 900px) {
      margin: 30px 0;
    }
    @media (max-width: 400px) {
      width: 100%;
    }
  }
  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Svg = styled.div``;
const Img1 = styled.img`
  position: absolute;
  width: 40px;
  left: 20px;
  top: 100px;
  z-index: 1;
  @media (max-width: 900px) {
    top: 200px;
  }
`;
const Img2 = styled.img`
  position: absolute;
  width: 40px;
  right: auto;
  bottom: 30px;
  z-index: 1;
`;
const Img3 = styled.img`
  position: absolute;
  width: 300px;
  right: 400px;
  bottom: 0px;
  @media (max-width: 900px) {
    right: auto;
    width: 200px;
  }
`;
const Img4 = styled.img`
  position: absolute;
  width: 50px;
  left: 0px;
  top: 100px;
  @media (max-width: 900px) {
    top: 200px;
  }
`;
const Img5 = styled.img`
  position: absolute;
  width: 50px;
  right: 0px;
  top: 70px;
  @media (max-width: 900px) {
    display: none;
  }
`;
const Img6 = styled.div`
  position: absolute;
  width: 60px;
  left: 380px;
  top: 50px;
  display: flex;
  flex-direction: column;
  h5{
    font-size: 18px;
    font-weight: 800;
  }
  @media (max-width: 900px) {
    /* display: none; */
    left:70vw;
  top: 290px;

  }
`;
const Header = () => {
  return (
    <Container maxWidth="lg">
      <Wrapper container mt={5}>
        <Grid item xs={12} md={6}>
          <Info>
            <Typography component="h4" variant="h4" fontWeight={500}>
              بهترین و جدیدترین{" "}
              <Typography component="h4" variant="h4" fontWeight={700}>
                لوازم سگ خانگی
              </Typography>
            </Typography>
            <Typography component="p" variant="p" mt={1} mb={4}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است.
            </Typography>
            <Link to="/">
              خرید کنید <ArrowBack />
            </Link>
          </Info>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image>
            <img src={mainImg} alt="image" />
          </Image>
          <Svg>
            <Img1 src={img1} alt="img" />
            <Img2 src={img2} alt="img" />
            <Img3 src={img3} alt="img" />
            <Img4 src={img4} alt="img" />
            <Img5 src={img5} alt="img" />
            <Img6>
              <Typography component="h5" variant="h5">
                تخفیف تا
              </Typography>
              <img src={img6} alt="img" />
            </Img6>
          </Svg>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Header;
