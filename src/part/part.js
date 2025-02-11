import React from "react";
import { useNavigate } from "react-router-dom";
import "./part.css";

const Part = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // 클릭 시 해당 경로로 이동
  };

  return (
    <div className='background'>
        <img 
            src='../images/backBtn.png'
            alt='뒤로가기 버튼'
            className='backBtn'
            onClick={() => handleNavigation("/")}
            />
        <div className='part-header'>
            {`본인의 파트를\n선택해주세요`}
        </div>
        <div className='part-select'>
            <button 
              className='part-sop'
              onClick={() => handleNavigation("/attendance/soprano")}>
                소프라노
            </button>
            <button 
              className='part-alto'
              onClick={() => handleNavigation("/attendance/alto")}>
              알토
              </button>
            <button 
              className='part-ten'
              onClick={() => handleNavigation("/attendance/tenor")}>
                테너
              </button>
            <button 
              className='part-bass'
              onClick={() => handleNavigation("/attendance/bass")}>
                베이스
              </button>
        </div>

    </div>
  )
}

export default Part;