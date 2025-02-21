import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { submitAttendance } from "../api/attendanceApi"; // 추가
import './attendance.css';

const studentData = {
  soprano: [
    { name: "김은서", grade: "고3", img: "sop김은서.png" },
    { name: "김지혜", grade: "고3", img: "sop김지혜.png" },
    { name: "송예나", grade: "고3", img: "sop송예나.png" },
    { name: "유지연", grade: "고2", img: "sop유지연.png" },
    { name: "이윤슬", grade: "고2", img: "sop이윤슬.png" },
    { name: "홍준희", grade: "고2", img: "sop홍준희.png" },
    { name: "김지유", grade: "중3", img: "sop김지유.png" },
    { name: "안예림", grade: "중3", img: "sop안예림.png" },
    { name: "유예봄", grade: "중3", img: "sop유예봄.png" },
    { name: "최샤론", grade: "중3", img: "sop최샤론.png" },
    { name: "송유나", grade: "중2", img: "sop송유나.png" },
    { name: "이열음", grade: "중2", img: "sop이열음.png" },
  ],
  alto: [
    { name: "김현서", grade: "고3", img: "alto김현서.png" },
    { name: "이예나", grade: "고3", img: "alto이예나.png" },
    { name: "정윤진", grade: "고3", img: "alto정윤진.png" },
    { name: "권설아", grade: "고2", img: "alto권설아.png" },
    { name: "서하진", grade: "고2", img: "alto서하진.png" },
    { name: "추효린", grade: "고1", img: "alto추효린.png" },
    { name: "김다민", grade: "중3", img: "alto김다민.png" },
    { name: "엄태은", grade: "중3", img: "alto엄태은.png" },
    { name: "최시온", grade: "중3", img: "alto최시온.png" },
    { name: "이연서", grade: "중2", img: "alto이연서.png" },
    { name: "이예담", grade: "중2", img: "alto이예담.png" },
  ],
  tenor: [
    { name: "이동진", grade: "고3", img: "ten이동진.png" },
    { name: "정진우", grade: "고3", img: "ten정진우.png" },
    { name: "최은성", grade: "고2", img: "ten최은성.png" },
    { name: "홍균형", grade: "고1", img: "ten홍균형.png" },
    { name: "최지온", grade: "중2", img: "ten최지온.png" },
    { name: "홍성하", grade: "중2", img: "ten홍성하.png" },
  ],
  bass: [
    { name: "문희수", grade: "고3", img: "bass문희수.png" },
    { name: "김규은", grade: "고2", img: "bass김규은.png" },
    { name: "이윤우", grade: "고2", img: "bass이윤우.png" },
    { name: "문다몬", grade: "고1", img: "bass문다몬.png" },
    { name: "장민준", grade: "고1", img: "bass장민준.png" },
    { name: "전의연", grade: "고1", img: "bass전의연.png" },
    { name: "문윤수", grade: "중2", img: "bass문윤수.png" },
  ],
};

const Attendance = () => {
  const { part } = useParams();
  const navigate = useNavigate();
  const [selectedStudent, setSelectedStudent] = useState(null);

  const handleBackClick = () => {
    navigate("/part");
  };

  const handleCardClick = (student) => {
    setSelectedStudent({ ...student, part }); 
  };
  const handleFinishClick = () => {

    if (!selectedStudent) return;

    const { part, grade, name } = selectedStudent;
    const time = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" });
  
    submitAttendance(part, grade, name, time)
      .then((response) => {
        console.log("🔥 출석 체크 응답:", response);
      })
      .catch((error) => {
        console.error("🔥 출석 체크 중 오류 발생:", error);
      });
  };
  

  const students = studentData[part] || [];

  return (
    <div className='background'>
      <img 
        src='../images/backBtn.png'
        alt='뒤로가기 버튼'
        className='backBtn'
        onClick={handleBackClick}
      />
      <button 
        className={`attendance-finish ${selectedStudent ? 'selected' : ''}`}
        onClick={handleFinishClick}
      >
        완료
      </button>
      <div className='attendance-header'>
        {`본인의 이름을\n선택해주세요`}
      </div>
      <div className="attendance-container">
        {students.map((student, index) => (
          <div 
            key={index} 
            className={`student-card ${selectedStudent === student ? 'selected' : ''}`}
            onClick={() => handleCardClick(student)}
          >
            <img src={`/images/${student.img}`} alt={student.name} className='student-img'/>
            <p className='student-grade'>{student.grade}</p>
            <p className='student-name'>{student.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
