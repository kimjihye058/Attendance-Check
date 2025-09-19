import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LandingBackgroundDiv,
  LandingHeader,
  LandingImg,
  LandingNotice,
} from "./Landing";

export default function End() {
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timeout = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <LandingBackgroundDiv>
      <LandingHeader>{`출석체크가\n완료되었습니다`}</LandingHeader>
      <LandingImg src="./images/LOGO.png" alt="Logo" />
      <LandingNotice>{countdown}초 뒤에 홈 화면으로 돌아갑니다</LandingNotice>
    </LandingBackgroundDiv>
  );
}
