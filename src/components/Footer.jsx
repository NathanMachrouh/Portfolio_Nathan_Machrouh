import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Démarrer from './Démarrer';
import logoWindows from '../assets/logo-windows.png';
import logoSon from '../assets/xp-systray/logo-son.png';
import logoHDD from '../assets/xp-systray/logo-hdd.png';
import logoProtection from '../assets/xp-systray/logo-protection.png';

const Footer = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formattedTime = () => {
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
    }

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    return (
        <div className="taskbar">
            <div className="start-button" onClick={openModal}>
                <img src={logoWindows} alt="logo windows" className="logo-windows" />
                <p>Démarrer</p>
            </div>
            <p>FR</p>
            <div className="systray">
                <div className="systray-icons">
                    <img src={logoSon} alt="logo du son" className="logo-son"/>
                    <img src={logoHDD} alt="logo du son" className="logo-hdd"/>
                    <img src={logoProtection} alt="logo du son" className="logo-protection"/>
                </div>
                <div className="time">
                    <p>{formattedTime()}</p>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Menu Démarrer"
                className="modal"
                overlayClassName="overlay"
            >
                <Démarrer />
            </Modal>
        </div>
    );
}

export default Footer;
