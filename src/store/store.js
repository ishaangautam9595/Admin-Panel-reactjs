import { configureStore } from '@reduxjs/toolkit';
import ProfileReducer from './ProfileSlice'

export const store = configureStore({
    reducer : {profile : ProfileReducer},
})