import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import article from "../constants/article";
import styled from "styled-components";
import { CiUser } from "react-icons/ci";
import { CgCalendarDates } from "react-icons/cg";

const Card = styled.div`
  position: relative;
`;
const Img = styled.img`
  width: 100%;
`;
const Titles = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  span {
    font-size: 12px;
    padding: 3px 5px;
    border-radius: 15px;
    color: #ffffff;
    background: #00000079;
    backdrop-filter: blur(9.3px);
    -webkit-backdrop-filter: blur(9.3px);
    margin: 5px;
  }
`;

const DatePublished = styled.div`
  display: flex;
  margin-top: 5px;
  p {
    color: #959595;
    font-size: 13px;
    span {
      color: #000;
      font-weight: 600;
    }
  }
`;

const UserSvg = styled(CiUser)`
  font-size: 16px;
  vertical-align: -4px;
  color: #f7763d;
  margin-left: 3px;
`;
const DateSvg = styled(CgCalendarDates)`
  font-size: 16px;
  vertical-align: -4px;
  color: #f7763d;
  margin-left: 3px;
`;

const Text = styled.h4`
  width: 85%;
  font-size: 18px;
  margin-top: 15px;
  line-height: 25px;
`;

const Description = styled.p`
  color: #888888;
  font-size: 15px;
  width: 85%;
  margin-top: 7px;
  line-height: 20px;
`;

const Articles = () => {
  return (
    <Container maxWidth="lg">
      <Grid container mt={3} justifyContent="space-between">
        {article.map((item) => (
          <Grid item mt={3} key={item.id} xs={12} sm={5.8} md={3.8}>
            <Card>
              <Img src={item.img} alt="articleImage" />
              <Titles>
                {item.title.map((title) => (
                  <span key={title}>{title}</span>
                ))}
              </Titles>
              <DatePublished>
                <div>
                  <Typography component="p" variant="span">
                    <UserSvg />
                    منتشر کننده <span>{item.publisher}</span>
                  </Typography>
                </div>
                <div>
                  <Typography component="p" variant="span" mr={5}>
                    <DateSvg />
                    تاریخ <span>{item.date}</span>
                  </Typography>
                </div>
              </DatePublished>
              <Text>{item.text}</Text>
              <Description>{item.description}</Description>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Articles;
