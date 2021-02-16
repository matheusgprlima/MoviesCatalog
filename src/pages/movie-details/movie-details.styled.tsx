import styled from "@emotion/styled";
import StarRating from "react-star-rating-component";
interface IContainerProps {
  background?: string;
}
export const Container = styled.div<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  min-width: fit-content;
  background: ${(props) =>
    props.background
      ? `url(${props.background})  center no-repeat 
`
      : "#000000"};
  object-fit: cover;
  background-size: cover;
  @media (max-width: 800px) {
    max-height: 100vh;
  }
`;
export const ContainerBlur = styled.div`
  min-height: 100vh;
  backdrop-filter: blur(20px);
  background: rgba(0, 0, 0, 0.3);
  min-width: -webkit-fill-available;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 250px;
  padding: 0 180px;
  @media (max-width: 800px) {
    padding: 0;
    margin-top: 270px;
  }
`;
export const CardPoster = styled.img`
  width: 400px;
  height: 450px;
  border-radius: 10px;
  @media (max-width: 800px) {
    width: 200px;
    height: 250px;
    margin: 0 0 0 20px;
  }
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
  @media (max-width: 800px) {
    font-size: 25px;
  }
`;
export const DetailsParagraph = styled.div`
  color: #ffffff;
  font-size: 26px;
  line-height: 1.2em;
  max-width: 55%;
  @media (max-width: 800px) {
    font-size: 16px;
    max-width: 90%;
  }
`;
export const StarRatingStyled = styled(StarRating)`
  display: flex !important;
  flex-direction: row-reverse;
  justify-content: flex-end;
  font-size: 30px;
  @media (max-width: 800px) {
    font-size: 16px;
  }
`;
export const MovieYear = styled.p`
  color: #ffffff;
`;
export const ImbdRating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70px;
  height: 40px;
  font-size: 20px;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  margin-left: 15px;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;
export const ImbdContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: fit-content;
  margin: 15px 0;
`;
export const FailCover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  min-width: fit-content;
  background: #000000;
  object-fit: cover;
  background-size: cover;
  @media (max-width: 800px) {
    max-height: 100vh;
  }
`;
export const FailMessage = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #ffffff;
`;
