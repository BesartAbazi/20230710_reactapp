import { createSlice } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news: []
    },
    reducers: {
        loadNews: (state, action) => {
            state.news = action.payload;
        },
        // { id: 100001, date: '2023-07-01', header: 'News 1', text: 'This is the text of News 1' }
        addNews: (state, action) => {
            state.news.push(action.payload);
        },
        // { id: 100001, date: '2023-07-01', object: 'news', header: 'News 1', text: 'This is the text of News 1' }
        removeNews: (state, action) => {
            state.news = state.news.filter(item => {
                return item.id !== action.payload.id ? action.payload : null
            })
        }
    }
});

// Selector:
export const selectNews = (state) => state.news.news;

// Actions:
export const { loadNews, addNews, removeNews } = newsSlice.actions;

// Reducer:
export default newsSlice.reducer;