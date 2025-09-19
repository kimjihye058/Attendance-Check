import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconChevronLeft } from "@tabler/icons-react";

export default function Part() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // 클릭 시 해당 경로로 이동
  };

  return (
    <Background className="background">
      <HeaderDiv>
        <BackIconDiv>
          <IconChevronLeft
            color="white"
            width={100}
            height={100}
            stroke={1.3}
            onClick={() => handleNavigation("/")}
          />
        </BackIconDiv>
        <Header>본인의 파트를 선택해주세요</Header>
      </HeaderDiv>
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
  height: 100vh;
  position: relative;
  overflow: auto;

  img {
    position: absolute;
  }
`;

export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 40px;
  margin-left: 40px;
  gap: 20px;
`;

export const BackIconDiv = styled.div`
  cursor: pointer;
`;

export const Header = styled.div`
  font-family: "PRETENDARD-REGULAR";
  font-size: 60px;
  color: #fff;
  white-space: pre-line;
`;

const PartSelect = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-right: 80px;
  margin-left: 80px;
`;

const PartButton = styled.button`
  width: 400px;
  height: 500px;
  background-color: #f5f5f5;
  border-radius: 10px;
  font-family: "PRETENDARD-REGULAR";
  font-size: 60px;
  cursor: pointer;
`;
