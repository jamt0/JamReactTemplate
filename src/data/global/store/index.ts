import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import userReducer from 'data/global/features/UserSlice/userSlice';
import authReducer from 'data/global/features/AuthSlice/authSlice';

export const store = configureStore({
	reducer: {
		user: userReducer,
		auth: authReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
