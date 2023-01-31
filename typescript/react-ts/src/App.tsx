import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch, increment } from './store'

let 박스: JSX.Element = <div></div>;

function App() {
  // 알아서 타입지정해줌
  let [user, setUser] = useState('kim')
  //그래도 하고 싶다면
  let [type, setType] = useState<string | number>('kim')
  const 꺼내온거 = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();


  return (
    <>
      <div className="count">
        {꺼내온거.counter1.count}
        <button onClick={() => { dispatch(increment()) }}>버튼</button>
      </div>
      <div className="App">
        <h4>하이용</h4>
        {/* props에 타입지정하기 */}
        <Profile name='철수' age='20'></Profile>
      </div>
    </>
  );
}

// 컴포넌트 만들 때 타입지정 -> 파라미터, 리턴
function Profile(props: { name: string, age: string }): JSX.Element {
  return (
    <div>{props.name} 입니다</div>
  )
}

export default App;
