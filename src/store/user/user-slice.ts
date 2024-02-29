import { AuthState } from "../../models/auth";
import { createSlice } from "@reduxjs/toolkit";
import { SliceNames } from "../../constants/redux-constants";

const initialState:AuthState = {
    userName: "",
    email: "",
}

const userSlice = createSlice({
  name: SliceNames.AUTH,
  initialState: initialState,
  reducers: {
    addUser(state, action) {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },
  },
});

export default userSlice.reducer;
export const  {addUser}  = userSlice.actions;
