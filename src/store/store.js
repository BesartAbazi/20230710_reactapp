import { configureStore } from "@reduxjs/toolkit";
import newsSliceReducer from "../components/News/newsSlice";
import objectsSliceReducer from "../components/Objects/objectsSlice";
import notificationSliceReducer from "../components/Notification/notificationSlice";

export default configureStore ({
    reducer: {
        news: newsSliceReducer,
        objects: objectsSliceReducer,
        notification: notificationSliceReducer
    }
});