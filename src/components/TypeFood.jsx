import { Container, Grid, Typography } from "@mui/material";
import fish from "../images/fish.png";
import cat from "../images/cat.png";
import dog from "../images/dog.png";
import styled from "styled-components";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0eaff;
  padding: 8px 12px;
  border: 2px solid #f0eaff;

  border-radius: 10px;
  transition: 0.5s ease-in-out;
  img {
    width: 55px;
  }
  div {
    display: flex;
    align-items: center;
    p {
      color: #000;
    }
  }
  svg {
    background-color: #5124c4;
    color: #ffffff;
    padding: 3px;
    border-radius: 50px;
    transition: 0.5s ease-in-out;
  }
  &:hover {
    background-color: #ffd6c4;
    border: 2px dashed #f7763d;
    svg {
      background-color: #f7763d;
    }
  }
`;

const TypeFood = () => {
  const typeFood = [
    { id: 1, title: "غذای ماهی", img: fish },
    { id: 2, title: "غذای گربه", img: cat },
    { id: 3, title: "غذای سگ", img: dog },
  ];
  return (
    <Container>
      <Grid container mt={1} spacing={3}>
        {typeFood.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Link to="/">
              <Items>
                <div>
                  <img src={item.img} alt="img" />
                  <Typography component="p" variant="p" mr={2} fontWeight={700}>
                    {item.title}
                  </Typography>
                </div>
                <IoIosArrowBack />
              </Items>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TypeFood;
