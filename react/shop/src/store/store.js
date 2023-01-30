import { configureStore, createSlice } from '@reduxjs/toolkit';
import { user } from './userSlice';

// 만들기
let stock = createSlice({
  name: 'stock',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
    { id: 1, name: 'Red Knit', count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let 번호 = state.findIndex((a) => {return a.id === action.payload})
      state[번호].count++
    },
    addItem(state, action) {
      state.push(action.payload)
    }
  },
});
// action.payload : Cart.js에서 사용한 addCount함수 파라미터 값
// 그 값과 initialState에 들어있는 id 값과 같은지? 

export let { addCount, addItem } = stock.actions;

// 등록
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
