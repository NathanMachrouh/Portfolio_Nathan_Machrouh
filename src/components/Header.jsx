import React, { useState } from 'react';
import logoDocuments from '../assets/logo-documents.png';
import logoDossier from '../assets/logo-dossier.png';
import logoMail from '../assets/logo-mail.png';
import logoTxt from '../assets/logo-txt.png';
import logoClippy from '../assets/logo-clippy.png';
import logoDossierImages from '../assets/logo-dossier-images.png';
import projets from '../data/projets.json';
import Contact from './Contact';
import Documents from './Documents';
import APropos from './APropos';
import CustomModal from './Modal';
import Screenshots from './Screenshots';
import Projets from './Projets';
import Competences from './Competences';
import corbeillePleine from '../assets/logo-corbeille-pleine.png';
import corbeilleVide from '../assets/logo-corbeille-vide.png';
import sonCorbeille from '../sound/corbeille.mp3';

function Header() {
    const [modals, setModals] = useState({});
    const [corbeille, setCorbeille] = useState(corbeillePleine);

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

    const soundCorbeille = () => {
        if (corbeille === corbeilleVide) return;
        const audio = new Audio(sonCorbeille);
        audio.play();
        audio.volume = 0.5;
        setCorbeille(corbeilleVide);
    }

    return (
        <div className="header-container">
            <div className="mes-infos">
                <img src={logoDocuments} alt="logo mes documents" onClick={() => openModal("Mes documents", <Documents />)} />
                <p>Mes documents</p>
                <img src={logoMail} alt="Logo de mail" onClick={() => openModal("Outlook express", <Contact />)} />
                <p>Courrier <p></p>électronique</p>
                <img src={logoClippy} alt="Logo de clippy" onClick={() => openModal("Notepad - A propos", <APropos />, "modal-notepad")} />
                <p>A propos</p>
                <img src={logoTxt} alt="Logo de txt" onClick={() => openModal("Notepad - Mes compétences", <Competences />, "modal-notepad")} />
                <p>Mes compétences</p>
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
            <div className="corbeille">
                <img src={corbeille} alt="logo corbeille pleine" onClick={soundCorbeille}/>
                <p>Corbeille</p>
            </div>
        </div>
    );
}

export default Header;
