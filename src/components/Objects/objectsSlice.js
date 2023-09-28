import { createSlice } from "@reduxjs/toolkit";

export const objectsSlice = createSlice({
    name: 'objects',
    initialState: {
        objects: []
    },
    reducer: {
        loadObjects: (state, action) => {
            state.objects = action.payload;
        },
        // { id: 100001, date: '2023-07-01', header: 'News 1', text: 'This is the text of News 1' }
        addObject: (state, action) => {
            state.objects.push(action.payload);
        },
        removeObject: (state, action) => {
            return state.objects.filter(item => {
                return item.id !== action.payload;
            })
        }
    }
});

// Selector:
export const selectObjects = (state) => state.objects.objects;

// Actions:
export const { loadObjects, addObjects, removeObject } = objectsSlice.actions;

// Reducer:
export default objectsSlice.reducer;