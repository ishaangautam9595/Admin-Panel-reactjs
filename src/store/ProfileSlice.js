import { createSlice } from "@reduxjs/toolkit";

let users = JSON.parse(localStorage.getItem('user'));
const ProfileSlice = createSlice({
    name : 'profile',
    initialState : users,
})

export default ProfileSlice.reducer;