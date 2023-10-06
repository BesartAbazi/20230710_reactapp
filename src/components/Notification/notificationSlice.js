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
    },
    extraReducers: {
        'news/removeNews': (state, action) => {
            state.notification = `Success: Item deleted (${action.payload.object}) with title: "${action.payload.header}".`;
        },
        'objects/removeObject': (state, action) => {
            state.notification = `Success: Item deleted (${action.payload.object}) with title: "${action.payload.header}".`;
        }
    }
});

// Selector:
export const selectNotification = (state) => state.notification;

// Actions:
export const { setNotification } = notificationSlice.actions;

// Reducer:
export default notificationSlice.reducer;