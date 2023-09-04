import { useState, useTransition, useDeferredValue } from 'react';

let 오천개 = new Array(5000).fill(0);

function Improvement() {
  let [name, setName] = useState('');
  let [isPending, startTransition] = useTransition(); // isPending은 startTransition이 처리중일 때 true 상태 (로딩중)
  let state = useDeferredValue(name); // 변동사항이 생기면 늦게 처리해줌

  return (
    <div>
      <h5>성능개선테스트</h5>
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value); // 코드 시작을 뒤로 늦춰줌 (비유 :  카드 빚 돌려 막기)
          });
        }}
      />
      {isPending
        ? '로딩중'
        : 오천개.map(() => {
            return <div>{state}</div>;
          })}
    </div>
  );
}

export default Improvement;
