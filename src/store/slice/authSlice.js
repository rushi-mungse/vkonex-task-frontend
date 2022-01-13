import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
        const {data}=action.payload;
        state.user=data.user
        if(state.user==null){
          state.isAuth=false;
        }else{
          state.isAuth=true;
        }
    }
  },
})

export const { setAuth, setOtp } = authSlice.actions

export default authSlice.reducer