import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { setCookie } from '@/utils/cookie';

const initialState = {
  token: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      state.token = token;
      setCookie({ name: 'token', value: token, expiredDurationInDay: 1 });
    },
    logOut: (state) => {
      state.token = '';
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentToken = (state: RootState) => state.auth.token;
