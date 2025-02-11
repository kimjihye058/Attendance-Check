import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./end.css";

const End = () => {
  const navigate = useNavigate();
    
    const [countdown, setCountdown] = useState(5); 
    useEffect(() => {
        const timer = setInterval(() => {
          setCountdown((prev) => prev - 1);
        }, 1000);
    
        const timeout = setTimeout(() => {
          navigate("/");
        }, 5000);
    
        return () => {
          clearInterval(timer);
          clearTimeout(timeout);
        };
      }, [navigate]);

  return (
    <div className='start-background'>
        <div className='start-header'>
        {`출석체크가\n완료되었습니다`}
      </div>
      <div className='start-notice'>
      {countdown}초 뒤에 홈 화면으로 돌아갑니다
      </div>
    </div>
  )
}

export default End;