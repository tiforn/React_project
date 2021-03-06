import styled from "styled-components";
import { Button } from "antd";

export const ImageCard = styled.div`
  position: relative;
`;

export const InfoContainer = styled.div`
  position: absolute;
  background-color: black;
  opacity: 75%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #f6f6fb;
`;

export const InfoHeader = styled.div`
  width: 222px;
  color: white;
  font-size: 8px;
  text-align: center;
  border-bottom: 2px solid #f6f6fb;
  margin: 0 auto;
  margin-top: 50px;
  padding-bottom: 12px;
`;

export const MainInfo = styled.div`
  text-align: center;
  border-top: 1px solid #f6f6fb;
  border-bottom: 1px solid #f6f6fb;
  margin-top: 2px;
  margin-left: 58px;
  margin-right: 58px;
  padding-top: 40px;
`;

export const TitleInfo = styled.h3`
  font-family: "OpenSans Semibold";
  font-size: 16px;
  color: #e7e7e7;
  margin: 0px;
`;

export const InfoDescription = styled.p`
  font-family: "OpenSans Regular";
  font-size: 12px;
  color: #e7e7e7;
  padding-top: 7px;
`;

export const InfoPrice = styled.h4`
  font-family: "OpenSans Regular";
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  color: #fff;
  padding-bottom: 25px;
`;

export const ButtonStyled = styled(Button)`
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  letter-spacing: 5px;
  background: none;
  border: 1px solid #fff;
  font-family: "OpenSans Regular";
  margin-bottom: 14px;
  :hover {
    border: none;
    color: #020243;
  }
`;

export const InfoFooter = styled.div`
  width: 222px;
  color: white;
  font-size: 8px;
  text-align: center;
  border-top: 2px solid #f6f6fb;
  margin: 0 auto;
  margin-top: 2px;
  margin-bottom: 50px;
  padding-top: 12px;
`;
