import { configureStore } from "@reduxjs/toolkit";
import newsSliceReducer from "../components/News/newsSlice";
import objectsSliceReducer from "../components/Objects/objectsSlice";

export default configureStore ({
    reducer: {
        news: newsSliceReducer,
        objects: objectsSliceReducer
    }
});