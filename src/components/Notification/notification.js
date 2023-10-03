import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectNotification, setNotification } from "./notificationSlice";
import './notification.css';

const Notification = () => {
    const dispatch = useDispatch();
    const notification = useSelector(selectNotification);

    useEffect(() => {
        let timeoutID = setTimeout(() => {
            dispatch(setNotification(''))

        }, 3000);

        return function clearUpFunction(){
            clearTimeout(timeoutID);
        }
    }, [notification.notification])

    return (
        <p className="notification"> { notification.notification } </p>
    )
}

export default Notification;