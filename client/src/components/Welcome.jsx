import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from '../components/Logout'
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    async function fn(){
      setUserName(
        await JSON.parse(
          localStorage.getItem(import.meta.env.VITE_API_URL)
        ).username
      );
    }
    fn();
  }, []);
  return (
    <>
    <Container>
    <div className="btn">
    <Logout/>
    </div>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>

    </>
  );
}

const Container = styled.div`
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
  .btn{
    position: absolute;
    right: 30px;
    top:10px;
  }
`;
