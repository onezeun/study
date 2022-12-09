/*eslint-disable*/

import './App.css';
import { useState } from 'react';

function App() {
  // 서버에서 가져왔다고 생각하기
  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState([
    '나트랑여행',
    '다모아통장',
    '가자미구이',
  ]);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState('false');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}
      >
        {' '}
        수정버튼{' '}
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          let result = copy.sort();
          글제목변경(result);
        }}
      >
        가나다순정렬
      </button>
      {
        // 삼항연산자
        modal == true ? <Modal /> : null
      }

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => (modal == true ? setModal(false) : setModal(true))}>{ 글제목[i] }</h4>
            <span
              onClick={() => {
                let copy = [...좋아요];
                copy[i] = copy[i] + 1;
                좋아요변경(copy)
              }}
            >
              💗
            </span>{' '}
            {좋아요[i]} <p>12월 6일 발행</p>
          </div>
        );
      })}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
