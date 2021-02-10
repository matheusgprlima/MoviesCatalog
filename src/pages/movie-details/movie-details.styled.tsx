import styled from "@emotion/styled";
import StarRating from "react-star-rating-component";
interface IContainerProps {
  background?: string;
}
export const Container = styled.div<IContainerProps>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.background
      ? `url(${props.background})  no-repeat 
`
      : "#000000"};
  object-fit: cover;
  background-size: cover;
`;
export const ContainerBlur = styled.div`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.3);
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 250px;
  padding: 0 180px;
`;
export const CardPoster = styled.img`
  width: 200px;
  height: 250px;
  border-radius: 10px;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 20px;
`;
export const MovieTitle = styled.h2`
  font-size: 50px;
  color: #ffffff;
  margin: 20px 0;
`;
export const DetailsParagraph = styled.div`
  color: #ffffff;
  line-height: 1.2em;
  max-width: 55%;
`;
export const StarRatingStyled = styled(StarRating)`
  display: flex !important;
  flex-direction: row-reverse;
  justify-content: flex-end;
`;
export const MovieYear = styled.p`
  color: #ffffff;
`;
