import { createSlice } from "@reduxjs/toolkit";

export const objectsSlice = createSlice({
    name: 'objects',
    initialState: {
        objects: []
    },
    reducers: {
        loadObjects: (state, action) => {
            state.objects = action.payload;
        },
        // { id: 100001, date: '2023-07-01', header: 'Object 1', text: 'This is the text of Object 1' }
        addObject: (state, action) => {
            state.objects.push(action.payload);
        },
        // { id: 100001, date: '2023-07-01', object: 'object', header: 'Object 1', text: 'This is the text of Object 1' }
        removeObject: (state, action) => {
            state.objects = state.objects.filter(item => {
                return item.id !== action.payload.id ? action.payload : null
            })
        }
    }
});

// Selector:
export const selectObjects = (state) => state.objects.objects;

// Actions:
export const { loadObjects, addObject, removeObject } = objectsSlice.actions;

// Reducer:
export default objectsSlice.reducer;