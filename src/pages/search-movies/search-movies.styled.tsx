import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(to bottom left, #a0e7e5, #fa26a0);
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 400px;
  height: 400px;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  border-radius: 10px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease-in-out;
`;

export const InputStyled = styled.input`
  width: 370px;
  height: 51px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  &:focus {
    outline: none;
  }
`;

export const ButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  padding: 12px 50px 13px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 45px;
  color: #ffffff;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  height: auto;
  align-items: center;
`;

export const CardContent = styled.div`
  position: relative;
  width: 230px;
  height: 350px;
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin: 10px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const CardBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  min-height: 20%;
`;
export const CardTitle = styled.h2`
  font-size: 12px;
  color: #ffffff;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
