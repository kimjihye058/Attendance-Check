import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Part() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // 클릭 시 해당 경로로 이동
  };

  return (
    <Background className="background">
      <BackImg
        src="../images/backBtn.png"
        alt="뒤로가기 버튼"
        onClick={() => handleNavigation("/")}
      />
      <Header>{`본인의 파트를\n선택해주세요`}</Header>
      <PartSelect>
        <PartButton onClick={() => handleNavigation("/attendance/soprano")}>
          소프라노
        </PartButton>
        <PartButton onClick={() => handleNavigation("/attendance/alto")}>
          알토
        </PartButton>
        <PartButton onClick={() => handleNavigation("/attendance/tenor")}>
          테너
        </PartButton>
        <PartButton onClick={() => handleNavigation("/attendance/bass")}>
          베이스
        </PartButton>
      </PartSelect>
    </Background>
  );
}

export const Background = styled.div`
  background-color: #2a303f;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: auto;

  img {
    position: absolute;
  }
`;

export const BackImg = styled.img`
  padding: 45px;
`;

export const Header = styled.div`
  font-family: "PRETENDARD-REGULAR";
  font-size: 70px;
  color: #fff;
  white-space: pre-line;
  text-align: center;
  padding-top: 125px;
`;

const PartSelect = styled.div`
  margin-top: 160px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
`;

const PartButton = styled.button`
  width: 600px;
  height: 100px;
  background-color: #f5f5f5;
  border-radius: 10px;
  font-family: "PRETENDARD-REGULAR";
  font-size: 60px;
  cursor: pointer;
`;