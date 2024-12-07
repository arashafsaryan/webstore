import styled from "styled-components";
import footer from "../images/footer.png";
import { Container, Grid, Typography } from "@mui/material";
import logo from "../images/logo.png";
import { PiPhoneCallLight } from "react-icons/pi";

const ContainerFooter = styled.footer`
  margin-top: 100px;
  position: relative;
`;
const ImgFooter = styled.img`
  width: 100%;
  height: 500px;
  background-size: cover;
  display: none;
  @media (min-width: 1200px) {
    display: block;
  }
`;
const ItemsFooter = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
  h5 {
    font-size: 18px;
    font-weight: 700;
  }
  ul li {
    margin-top: 15px;
    color: #666666;
    cursor: pointer;
    transition: 0.2s ease-in;
    &:hover {
      color: #f7763d;
    }
  }
  @media (min-width: 1200px) {
    top: 100px;
  }
  @media (max-width: 1199px) {
    border-top: 2px dashed #f7763d;
    padding-top: 20px;
  }
`;
const Brand = styled.div`
  width: 90%;
  .logo {
    display: flex;
    align-items: center;
    img {
      width: 40px;
      margin-left: 20px;
    }
    p {
      color: #f7763d;
      font-weight: 700;
    }
  }
  .text {
    line-height: 25px;
    color: #666666;
  }
  .phone {
    display: flex;
    justify-content: space-between;
    svg {
      font-size: 20px;
      vertical-align: -5px;
    }
    span {
      font-weight: 700;
    }
    :nth-child(2) {
      color: #f7763d;
    }
  }
`;
const CopyRight = styled.div`
  p {
    text-align: center;
    border-top: 2px dashed #f7763d;
    padding-top: 30px;
  }
  span {
    color: #f7763d;
  }
  @media (min-width: 1200px) {
    margin-top: 130px;
  }
`;

const Footer = () => {
  return (
    <ContainerFooter>
      <ImgFooter src={footer} alt="footerImage" />
      <ItemsFooter>
        <Container maxWidth="lg">
          <Grid container maxWidth="1000px" margin="auto">
            <Grid item xs={12} sm={6} md={4} mt={3}>
              <Typography component="h5" variant="h5">
                {" "}
                دسترسی سریع{" "}
              </Typography>
              <ul>
                <li>درباره ما</li>
                <li>تماس با ما</li>
                <li>سوالات متداول</li>
                <li>پیگیری سفارشات</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} mt={3}>
              <Typography component="h5" variant="h5">
                {" "}
                لینک های مهم{" "}
              </Typography>
              <ul>
                <li>حساب کاربری من</li>
                <li>سبد خرید</li>
                <li>قوانین و مقررات</li>
                <li>سیاست حفظ حریم شخصی</li>
              </ul>
            </Grid>
            <Grid item xs={12} sm={6} md={4} mt={3}>
              <Brand>
                <div className="logo">
                  <img src={logo} alt="logo" />
                  <Typography component="p" variant="p">
                    فروشگاه شاپت
                  </Typography>
                </div>
                <Typography className="text" component="p" variant="p" my={2}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است،{" "}
                </Typography>
                <div className="phone">
                  <span>
                    <PiPhoneCallLight /> شماره تلفن
                  </span>
                  <span>09215365520</span>
                </div>
              </Brand>
            </Grid>
            <Grid item xs={12} my={3}>
              <CopyRight>
                <Typography component="p" variant="p">
                  تمامی حقوق این وبسایت برای <span>شاپت</span> محفوظ می باشد.
                </Typography>
              </CopyRight>
            </Grid>
          </Grid>
        </Container>
      </ItemsFooter>
    </ContainerFooter>
  );
};

export default Footer;
