import React, { useState, useEffect } from 'react';
//import startSound from '../sound/start.mp3';

const Accueil = () => {
    const [display, setDisplay] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            // const audio = new Audio(startSound);
            // audio.volume = 0.1;
            // audio.play();
            setDisplay(false);
            // audio.stop();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    if (!display) {
        return null;
    }

    return (
        <div className="windows__bg">
            <div className="windows__bg--inner">
                <div className="windows__logo">
                    <div className="windows__logo--inner red"></div>
                    <div className="windows__logo--inner green"></div>
                    <div className="windows__logo--inner blue"></div>
                    <div className="windows__logo--inner yellow"></div>
                </div>
                <div className="windows__name">
                    <p>Portfolio</p>
                    <div className="windows__name--inner">
                        Machrouh<span>Nathan</span>
                    </div>
                </div>
                <div className="windows__bg--loading">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Accueil;
