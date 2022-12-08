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
  let [좋아요, 좋아요변경] = useState(0);
  let [modal, setModal] = useState('false');

  const 좋아 = () => {
    좋아요변경(좋아요 + 1);
  };

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

      <div className="list">
        <h4>
          {글제목[0]}{' '}
          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            💗
          </span>{' '}
          {좋아요}{' '}
        </h4>
        <p>12월 6일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>12월 6일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=> 
        modal == true ? setModal(false) : setModal(true)
        }>{글제목[2]}</h4>
        <p>12월 6일 발행</p>
      </div>
            {
              // 삼항연산자
              modal == true ? <Modal/> : null
            }
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
