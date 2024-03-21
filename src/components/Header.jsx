import React, { useState } from 'react';
import logoDocuments from '../assets/logo-documents.png';
import logoDossier from '../assets/logo-dossier.png';
import logoMail from '../assets/logo-mail.png';
import logoTxt from '../assets/logo-txt.png';
import logoDossierImages from '../assets/logo-dossier-images.png';
import projets from '../data/projets.json';
import Contact from './Contact';
import Documents from './Documents';
import CustomModal from '../components/Modal';
import Screenshots from '../components/Screenshots';
import Projets from './Projets';

function Header() {
    const [modals, setModals] = useState({});

    const openModal = (title, content, id) => {
        setModals(prevModals => ({
            ...prevModals,
            [title]: { content, id }
        }));
    };

    const closeModal = (title) => {
        setModals(prevModals => {
            const updatedModals = { ...prevModals };
            delete updatedModals[title];
            return updatedModals;
        });
    };

    const openProjetsModal = (project) => {
        openModal(
            project.titre,
            <div>
                <img src={logoTxt} alt={project.titre} onClick={() => openProjectDetailsModal(project)} />
                <p>Description</p>
                <p>du projet</p>
                <img src={logoDossierImages} alt={project.titre} onClick={() => openScreenshotsModal(project)} />
                <p>Screenshots</p>
            </div>,
            "modal-projet"
        );
    };
    
    const openScreenshotsModal = (project) => {
        openModal(`Screenshots - ${project.titre}`, <Screenshots projet={project} />, "modal-screenshots");
    };
    
    const openProjectDetailsModal = (project) => {
        openModal(`Notepad - ${project.titre}`, <Projets projet={project} />, "modal-notepad");
    };

    return (
        <div className="header-container">
            <div className="mes-documents">
                <img src={logoDocuments} alt="logo mes documents" onClick={() => openModal("Mes documents", <Documents />)} />
                <p>Mes documents</p>
                <img src={logoMail} alt="Logo de mail" onClick={() => openModal("Outlook express", <Contact />)} />
                <p>Outlook <p></p>express</p>
            </div>
            <div className="projets">
                {projets.map((project, index) => (
                    <div key={index} onClick={() => openProjetsModal(project)}>
                        <img src={logoDossier} alt={`${project.titre}`} />
                        <p>{project.titre}</p>
                    </div>
                ))}
            </div>
            {Object.entries(modals).map(([title, { content, id }]) => (
                <CustomModal key={title} isOpen={true} onClose={() => closeModal(title)} title={title} content={content} id={id} />
            ))}
        </div>
    );
}

export default Header;
