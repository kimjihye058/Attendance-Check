import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./start.css";

const Start = () => {
  const navigate = useNavigate();

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
    <div className='start-background'>
      <div className='start-header'>
        {`사랑유스콰이어\n출석체크`}
      </div>
      <div className='start-notice'>
        클릭하여 시작하기
      </div>
    </div>
  )
}

export default Start;