import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { submitAttendance } from "../api/attendanceApi";
import styled from "styled-components";
import { Background, BackImg, Header } from "./Part"; // 재사용

const studentData = {
  soprano: [
    {
      name: "김은서",
      grade: "고3",
      img: "https://sarang-yc-attendance.web.app/images/sop_kimeunseo.png",
    },
    {
      name: "김지혜",
      grade: "고3",
      img: "https://sarang-yc-attendance.web.app/images/sop_kimjihye.png",
    },
    {
      name: "송예나",
      grade: "고3",
      img: "https://sarang-yc-attendance.web.app/images/sop_songyena.png",
    },
    {
      name: "유지연",
      grade: "고2",
      img: "https://sarang-yc-attendance.web.app/images/sop_yoojiyeon.png",
    },
    {
      name: "이윤슬",
      grade: "고2",
      img: "https://sarang-yc-attendance.web.app/images/sop_leeyunseul.png",
    },
    {
      name: "차지우",
      grade: "고2",
      img: "https://sarang-yc-attendance.web.app/images/sop_chajiu.png",
    },
    {
      name: "홍준희",
      grade: "고2",
      img: "https://sarang-yc-attendance.web.app/images/sop_hongjunhee.png",
    },
    {
      name: "김지유",
      grade: "중3",
      img: "https://sarang-yc-attendance.web.app/images/sop_kimjiyu.png",
    },
    {
      name: "안예림",
      grade: "중3",
      img: "https://sarang-yc-attendance.web.app/images/sop_ahnyerim.png",
    },
    {
      name: "유예봄",
      grade: "중3",
      img: "https://sarang-yc-attendance.web.app/images/sop_yuyebom.png",
    },
    {
      name: "최샤론",
      grade: "중3",
      img: "https://sarang-yc-attendance.web.app/images/sop_choisharon.png",
    },
    {
      name: "송유나",
      grade: "중2",
      img: "https://sarang-yc-attendance.web.app/images/sop_songyuna.png",
    },
    {
      name: "이열음",
      grade: "중2",
      img: "https://sarang-yc-attendance.web.app/images/sop_leeyeoleum.png",
    },
    {
      name: "구예윤",
      grade: "중1",
      img: "https://sarang-yc-attendance.web.app/images/sop_guyeyun.png",
    },
    {
      name: "김윤서",
      grade: "중1",
      img: "https://sarang-yc-attendance.web.app/images/sop_kimyunseo.png",
    },
    {
      name: "김주하",
      grade: "중1",
      img: "https://sarang-yc-attendance.web.app/images/sop_kimjuha.png",
    },
  ],
  alto: [
    {
      name: "김현서",
      grade: "고3",
      img: "https://sarang-yc-attendance.web.app/images/alto_kimhyunseo.png",
    },
    {
      name: "이예나",
      grade: "고3",
      img: "https://sarang-yc-attendance.web.app/images/alto_leeyena.png",
    },
    {
      name: "정윤진",
      grade: "고3",
      img: "https://sarang-yc-attendance.web.app/images/alto_jeongyunjin.png",
    },
    {
      name: "권설아",
      grade: "고2",
      img: "https://sarang-yc-attendance.web.app/images/alto_kwonseolah.png",
    },
    {
      name: "서하진",
      grade: "고2",
      img: "https://sarang-yc-attendance.web.app/images/alto_seohajin.png",
    },
    {
      name: "추효린",
      grade: "고1",
      img: "https://sarang-yc-attendance.web.app/images/alto_choohyorin.png",
    },
    {
      name: "김다민",
      grade: "중3",
      img: "https://sarang-yc-attendance.web.app/images/alto_kimdamin.png",
    },
    {
      name: "엄태은",
      grade: "중3",
      img: "https://sarang-yc-attendance.web.app/images/alto_eomtaeeun.png",
    },
    {
      name: "최시온",
      grade: "중3",
      img: "https://sarang-yc-attendance.web.app/images/alto_choision.png",
    },
    {
      name: "박서연",
      grade: "중2",
      img: "https://sarang-yc-attendance.web.app/images/alto_parkseoyeon.png",
    },
    {
      name: "이연서",
      grade: "중2",
      img: "https://sarang-yc-attendance.web.app/images/alto_leeyeonseo.png",
    },
    {
      name: "이예담",
      grade: "중2",
      img: "https://sarang-yc-attendance.web.app/images/alto_leeyedam.png",
    },
    {
      name: "방샤론",
      grade: "중1",
      img: "https://sarang-yc-attendance.web.app/images/alto_bangsharon.png",
    },
    {
      name: "안나림",
      grade: "중1",
      img: "https://sarang-yc-attendance.web.app/images/alto_annarim.png",
    },
  ],
  tenor: [
    {
      name: "이동진",
      grade: "고3",
      img: "https://sarang-yc-attendance.web.app/images/ten_leedongjin.png",
    },
    {
      name: "정진우",
      grade: "고3",
      img: "https://sarang-yc-attendance.web.app/images/ten_jeongjinwoo.png",
    },
    {
      name: "최은성",
      grade: "고2",
      img: "https://sarang-yc-attendance.web.app/images/ten_choieunseong.png",
    },
    {
      name: "홍균형",
      grade: "고1",
      img: "https://sarang-yc-attendance.web.app/images/ten_honggyunhyeong.png",
    },
    {
      name: "최지온",
      grade: "중2",
      img: "https://sarang-yc-attendance.web.app/images/ten_choijion.png",
    },
    {
      name: "홍성하",
      grade: "중2",
      img: "https://sarang-yc-attendance.web.app/images/ten_hongseongha.png",
    },
    {
      name: "김영광",
      grade: "중1",
      img: "https://sarang-yc-attendance.web.app/images/ten_kimyoungkwang.png",
    },
    {
      name: "박찬율",
      grade: "중1",
      img: "https://sarang-yc-attendance.web.app/images/ten_parkchanyool.png",
    },
    {
      name: "서하준",
      grade: "중1",
      img: "https://sarang-yc-attendance.web.app/images/ten_seohajun.png",
    },
  ],
  bass: [
    {
      name: "문희수",
      grade: "고3",
      img: "https://sarang-yc-attendance.web.app/images/bass_moonheesoo.png",
    },
    {
      name: "김규은",
      grade: "고2",
      img: "https://sarang-yc-attendance.web.app/images/bass_kimgyueun.png",
    },
    {
      name: "이윤우",
      grade: "고2",
      img: "https://sarang-yc-attendance.web.app/images/bass_leeyunwoo.png",
    },
    {
      name: "문다몬",
      grade: "고1",
      img: "https://sarang-yc-attendance.web.app/images/bass_mundamon.png",
    },
    {
      name: "장민준",
      grade: "고1",
      img: "https://sarang-yc-attendance.web.app/images/bass_jangminjun.png",
    },
    {
      name: "전의연",
      grade: "고1",
      img: "https://sarang-yc-attendance.web.app/images/bass_jeoneuiyeon.png",
    },
    {
      name: "문윤수",
      grade: "중2",
      img: "https://sarang-yc-attendance.web.app/images/bass_moonyunsu.png",
    },
    {
      name: "민석빈",
      grade: "중1",
      img: "https://sarang-yc-attendance.web.app/images/bass_minseokbin.png",
    },
    {
      name: "박윤준",
      grade: "중1",
      img: "https://sarang-yc-attendance.web.app/images/bass_parkyoonjun.png",
    },
    {
      name: "장현우",
      grade: "중1",
      img: "https://sarang-yc-attendance.web.app/images/bass_janghyunwoo.png",
    },
  ],
};

export default function Attendance() {
  const { part } = useParams();
  const navigate = useNavigate();
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleBackClick = () => {
    navigate("/part");
  };

  const handleCardClick = (student) => {
    setSelectedStudent(student);
  };

  const handleFinishClick = () => {
    if (!selectedStudent) return;

    const { grade, name } = selectedStudent;
    const time = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });

    submitAttendance(part, grade, name, time)
      .then((response) => {
        console.log("출석 체크 응답:", response);
        navigate("/end"); // 완료 후 /end로 이동
      })
      .catch((error) => {
        console.error("출석 체크 중 오류 발생:", error);
      });
  };

  const students = studentData[part] || [];

  return (
    <Background>
      <BackImg
        src="../images/backBtn.png"
        alt="뒤로가기 버튼"
        onClick={handleBackClick}
      />
      <FinishButton
        className={`attendance-finish ${selectedStudent ? "selected" : ""}`}
        onClick={handleFinishClick}
      >
        완료
      </FinishButton>
      <Header>{`본인의 이름을\n선택해주세요`}</Header>
      <AttendanceContainer>
        {students.map((student, index) => (
          <StudentCard
            key={index}
            className={`student-card ${
              selectedStudent === student ? "selected" : ""
            }`}
            onClick={() => handleCardClick(student)}
          >
            <StudentImg src={student.img} alt={student.name} />
            <StudentGrade>{student.grade}</StudentGrade>
            <StudentName>{student.name}</StudentName>
          </StudentCard>
        ))}
      </AttendanceContainer>
    </Background>
  );
}

const FinishButton = styled.button`
  width: 150px;
  height: 70px;
  border-radius: 15px;
  background-color: #999;
  color: #fff;
  font-family: "PRETENDARD-SEMIBOLD";
  font-size: 20px;
  float: right;
  margin-top: 45px;
  margin-right: 45px;
`;

const AttendanceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 35px;
  justify-content: center;
  margin: 75px;
`;

const StudentCard = styled.div`
  width: 205px;
  height: 277px;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &.selected {
    outline: 8px solid #a92a2b;
  }
`;

const StudentImg = styled.img`
  margin-top: 22px;
`;

const StudentGrade = styled.p`
  margin-top: 165px;
  font-family: "PRETENDARD-REGULAR";
  font-size: 25px;
`;

const StudentName = styled.p`
  margin-top: -20px;
  font-family: "PRETENDARD-REGULAR";
  font-size: 50px;
`;
