import React from 'react';
import "./part.css";

const part = () => {
  return (
    <div className='part-background'>
        <img 
            src='../images/backBtn.png'
            alt='뒤로가기 버튼'
            className='backBtn'
        />
        <div className='part-header'>
            {`본인의 파트를\n선택해주세요`}
        </div>
        <div className='part-select'>
            <button className='part-sop'>소프라노</button>
            <button className='part-alto'>알토</button>
            <button className='part-ten'>테너</button>
            <button className='part-bass'>베이스</button>
        </div>

    </div>
  )
}

export default part