import { Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import baner1 from "../images/tools/toolBaner1.png";
import baner2 from "../images/tools/toolBaner2.png";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiPlusSquare } from "react-icons/fi";
import tools from "../constants/tools";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
import { TiTickOutline } from "react-icons/ti";

const Baner = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 100px;
    right: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h5 {
      color: #ffffff;
      font-weight: 600;
    }
    a {
      color: #000;
      font-size: 18px;
      font-weight: 600;
    }
  }
  @media (max-width: 1199px) {
    display: none;
  }
  .baner-1 {
    width: 130%;
    margin: -10px -20px;
    height: 656px;
  }
`;
const Img = styled.img`
  position: absolute;
  width: auto;
  height: 624px;
`;
const ArrowBack = styled(IoIosArrowBack)`
  vertical-align: -5px;
`;

//

const ProductCard = styled.div`
  border: 2px dashed #e2e2e2;
  border-radius: 10px;
  text-align: center;
  padding: 10px;
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
  width: 130px;
  height: 130px;
`;

const ProductTitle = styled.h3`
  font-size: 19px;
  font-weight: 600;
  text-align: start;
  color: #666666;
  line-height: 25px;
  margin: 10px 0;
  @media (max-width: 1200px) {
    font-size: 14px;
  }
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
    vertical-align: -6px;
  }
  span {
    margin-left: 5px;
  }
`;
//

const Tools = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.cartItems);

  const handleAddToCart = (item) => {
    // if (!isInCart) {
    dispatch(addToCart(item));
    // }
  };
  return (
    <Container maxWidth="lg">
      <Grid container mt={3} spacing={5} justifyContent="space-between">
        <Grid item xs={0} lg={3}>
          <Baner>
            <Img className="baner-1" src={baner1} alt="baner" />
            <Img src={baner2} alt="baner" />
            <div>
              <Typography component="h5" variant="h5" mb={1}>
                لوازم نگهداری سگ{" "}
              </Typography>
              <Link to="/">
                مشاهده همه <ArrowBack />
              </Link>
            </div>
          </Baner>
        </Grid>
        <Grid item xs={12} lg={8.4}>
          <Grid container spacing={3}>
            {tools.map((item) => (
              <Grid item key={item.id} xs={12} sm={6} md={4}>
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
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tools;
