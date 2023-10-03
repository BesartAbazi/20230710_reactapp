import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        notification: ''
    },
    reducers: {
        setNotification: (state, action) => {
            state.notification = action.payload;
        },
    }
});

// Selector:
export const selectNotification = (state) => state.notification;

// Actions:
export const { setNotification } = notificationSlice.actions;

// Reducer:
export default notificationSlice.reducer;