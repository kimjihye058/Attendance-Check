import React from 'react';
import { useNavigate } from "react-router-dom";
import './attendance.css';

const Attendance = () => {
  const navigate = useNavigate();
    const handleBackClick = () => {
      navigate("/part");
    };
  return (
    <div className='background'>
        <img 
            src='../images/backBtn.png'
            alt='뒤로가기 버튼'
            className='backBtn'
            onClick={handleBackClick}
        />
        <button className='attendance-finish'>완료</button>
        <div className='attendance-header'>
            {`본인의 이름을\n선택해주세요`}
        </div>
    </div>
  )
}

export default Attendance;