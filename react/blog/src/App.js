/*eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {

// 서버에서 가져왔다고 생각하기
let post = '강남 우동 맛집';
let [글제목, b] = useState(['남자 코트 추천', '맛집 추천', '파이썬 독학']);
let [좋아요, 좋아요변경] = useState(0);

const 좋아 = () => {
  좋아요변경(좋아요+1);
}


  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={ ()=>{좋아요변경(좋아요+1)} }>💗</span> {좋아요} </h4>
        <p>12월 6일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>12월 6일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>12월 6일 발행</p>
      </div>
    </div>
  );
}

export default App;
