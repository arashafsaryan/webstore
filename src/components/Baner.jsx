import { Container, Grid } from "@mui/material";
import baner1 from "../images/baner/baner1.png";
import baner2 from "../images/baner/baner2.png";
import baner3 from "../images/baner/baner3.png";
import baner4 from "../images/baner/baner4.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Img = styled.img`
  width: 100%;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

const Baner = () => {
  const item = [
    { id: 1, img: baner1 },
    { id: 2, img: baner2 },
    { id: 3, img: baner3 },
    { id: 4, img: baner4 },
  ];
  return (
    <Container maxWidth="lg">
      <Grid container mt={5} spacing={3}>
        {item.map((i) => (
          <Grid item key={i.id} xs={6} sm={4} md={3}>
            <Link to="/">
              <Img src={i.img} alt="img" />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Baner;
