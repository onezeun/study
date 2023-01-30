import { createSlice } from '@reduxjs/toolkit';

export let user = createSlice({
  // useState() 역할
  name: 'user',
  initialState: { name: 'kim', age: 20 },
  reducers: {
    changeName(state) {
      // 파라미터는 기존 state
      state.name = 'park';
    },
    increase(state) {
      state.age += 1;
    },
  },
});

export let { changeName, increase } = user.actions;


