import { Alert, Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch} from 'react-redux';
import { addCount } from '../store/store.js';
import { increase } from '../store/userSlice';

function Cart() {
  let state = useSelector((state) => state); // redux store 가져와 줌
  let dispatch = useDispatch();

  return (
    <div>
      <Alert>{state.user.name}({state.user.age})의 장바구니</Alert>
      <Button onClick={()=> dispatch(increase())}>이름나이 변경</Button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.stock.map(function (item, i) {
            return (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <Button onClick={() => {
                    dispatch(addCount(item.id))
                  }}>+</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
