import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CardContent = styled(Link)`
  position: relative;
  width: 230px;
  height: 350px;
  margin: 10px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.8);
  margin: 10px 0 20px 0;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
`;
export const CardBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  min-height: 20%;
`;
export const CardTitle = styled.h3`
  font-size: 25px;
  color: #ffffff;
  text-decoration: none;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
