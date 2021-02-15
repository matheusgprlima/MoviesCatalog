import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 0;
`;

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 30%;
  min-width: 300px;
  height: 400px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12px);
  border-radius: 10px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease-in-out;
`;

export const InputStyled = styled.input`
  width: 70%;
  height: 13%;
  background: transparent;
  /* backdrop-filter: blur(5px); */
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 20px;
  padding: 5px 15px;
  &:focus {
    outline: none;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 12px 50px 13px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 45px;
  color: #ffffff;
  cursor: pointer;
  border: none;
  &:focus {
    outline: none;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const CardContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  margin: 50px auto;
`;

export const CardContent = styled.div`
  position: relative;
  width: 230px;
  height: 350px;
  margin: 10px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.8);
  margin: 10px 0 20px 0;
`;
export const CardBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  min-height: 20%;
`;
export const CardTitle = styled(Link)`
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
