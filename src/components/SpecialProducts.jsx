import styled from "styled-components";
import { Container, Grid } from "@mui/material";
import baner from "../images/specialProducts/baner.png";
import svg1 from "../images/specialProducts/baner-svg1.png";
import svg2 from "../images/specialProducts/baner-svg2.png";
import svg3 from "../images/specialProducts/baner-svg3.png";
import { IoIosArrowBack } from "react-icons/io";

const Baner = styled.div`
  position: relative;
`;
const ImgContainer = styled.img`
  width: 100%;
`;
const Svg = styled.div``;
const BanerSvg1 = styled.img`
  position: absolute;
  top: 50%;
  left: 35%;
  width: 100px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const BanerSvg2 = styled.img`
  position: absolute;
  top: -30%;
  left: 10%;
  width: 80px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const BanerSvg3 = styled.img`
  position: absolute;
  top: 10%;
  left: 3%;
  width: 60px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Button = styled.button`
  position: absolute;
  right: 35%;
  top: 35%;
  background-color: #ffffff;
  color: #f7763d;
  font-weight: 700;
  font-size: 18px;
  border: 0;
  border-radius: 30px;
  padding: 5px 15px;
  outline: none;
  cursor: pointer;
  svg {
    vertical-align: -6.5px;
    background-color: #f7763d;
    color: #ffffff;
    border-radius: 50%;
    padding: 1px;
    margin-right: 5px;
  }
  @media (max-width: 768px) {
    right: 40%;
    top: 35%;
    font-size: 8px;
    padding: 1px 4px;
    svg {
      vertical-align: -3.5px;
      padding: 0.2;
      margin-right: 2px;
    }
  }
`;

const SpecialProducts = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={5}>
        <Grid item xs={12}>
          <Baner>
            <ImgContainer src={baner} alt="img" />
            <Button>
              محصولات ویژه <IoIosArrowBack />
            </Button>
            <Svg>
              <BanerSvg1 src={svg1} alt="svg-baner" />
              <BanerSvg2 src={svg2} alt="svg-baner" />
              <BanerSvg3 src={svg3} alt="svg-baner" />
            </Svg>
          </Baner>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SpecialProducts;
