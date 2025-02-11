import React from 'react'
import "./end.css";

const end = () => {
  return (
    <div className='start-background'>
        <div className='start-header'>
        {`출석체크가\n완료되었습니다`}
      </div>
      <div className='start-notice'>
        5초 뒤에 홈 화면으로 돌아갑니다
      </div>
    </div>
  )
}

export default end;