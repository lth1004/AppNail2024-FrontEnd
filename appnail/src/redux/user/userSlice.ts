import { createSlice } from "@reduxjs/toolkit"
import { initUserInfo } from "interface/user/interface"

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: initUserInfo
  },
  reducers: {
    setUserValue: (state, action) => {
      state.profile = action.payload;
    }
  }
})
export const {reducer: userReducer} = userSlice;

export const { setUserValue } = userSlice.actions;
export default userReducer;
