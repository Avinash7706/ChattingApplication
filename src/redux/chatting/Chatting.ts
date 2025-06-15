// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  name: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    logout(state) {
      state.id = '';
      state.name = '';
    
    },
    setId(state, action) {
      state.id = action.payload;
    },
  },
});

export const {   setId } = userSlice.actions;
export default userSlice.reducer;
