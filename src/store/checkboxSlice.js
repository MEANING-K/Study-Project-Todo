/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  total: 0,
  checked: 0,
};

const checkboxSlice = createSlice({
  name: 'checkboxStatus',
  initialState,
  reducers: {
    // Reducer를 정의할 수 있습니다
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setChecked: (state, action) => {
      state.checked = action.payload;
    },
  },
});

export const { setTotal, setChecked } = checkboxSlice.actions;
export default checkboxSlice.reducer;
