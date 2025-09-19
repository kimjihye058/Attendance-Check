import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Landing() {
  const navigate = useNavigate();

  const colors = useMemo(() => ["#FFFFFF", "#9B9B9B"], []);
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [colors.length]);

  useEffect(() => {
    const handleClick = () => {
      navigate("/part");
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [navigate]);

  return (
    <LandingBackgroundDiv>
      <LandingHeader>{`사랑유스콰이어\n출석체크`}</LandingHeader>
      <LandingImg src="./images/LOGO.png" alt="Logo" />
      <LandingNotice style={{ color: colors[colorIndex] }}>
        클릭하여 시작하기
      </LandingNotice>
    </LandingBackgroundDiv>
  );
}

export const LandingBackgroundDiv = styled.div`
  background-color: #2a303f;
`;

export const LandingHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "PRETENDARD-SEMIBOLD";
  font-size: 70px;
  color: #fff;
  white-space: pre-line;
  text-align: center;
  padding-top: 80px;
`;

export const LandingImg = styled.img`
  display: block;
  margin: 0 auto;
`;

export const LandingNotice = styled.div`
  font-family: "PRETENDARD-REGULAR";
  font-size: 40px;
  color: #fff;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 100px;
`;
