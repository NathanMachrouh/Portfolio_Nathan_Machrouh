/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import logoWindows from '../assets/logo-windows.png';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
    }, []);

    const formattedTime = () => {
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    return (
        <div className="taskbar">
            <div className="start-button">
                <img src={logoWindows} alt="logo windows" className="logo-windows" />
                <p>Démarrer</p>
            </div>
            <p>FR</p>
            <div className="systray">
                <div className="systray-icons">

                </div>
                <div className="time">
                    <p>{formattedTime()}</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
