import React, { useState, useRef, useEffect } from 'react';
import CustomModal from '../components/Modal';
import avatar from '../assets/avatar.jpg';
import separeteurGris from '../assets/separateur-gris.png';
import separateurBleu from '../assets/separateur-bleu.png';
import stopSession from '../assets/stop-session.png';
import stopComputer from '../assets/stop-computer.png';
import logoMail from '../assets/logo-mail.png';
import logoInternetExplorer from '../assets/logo-internet-explorer.png';
import logoDocuments from '../assets/logo-documents.png';
import logoImages from '../assets/logo-dossier-images.png';
import logoMusiques from '../assets/logo-musiques.png';
import logoPosteTravail from '../assets/logo-poste-de-travail.png';
import logoImprimantes from '../assets/logo-imprimantes.png';
import logoPanneauConfig from '../assets/logo-panneau-config.png';
import logoFavorisReseau from '../assets/logo-favoris-reseau.png';
import logoLoupe from '../assets/logo-loupe.png';
import logoDocumentsRecents from '../assets/logo-documents-recents.png';
import logoHelp from '../assets/logo-help.png';
import logoExecuter from '../assets/logo-executer.ico';
import logoFlecheVerte from '../assets/logo-fleches-verte.png';
import logoMsn from '../assets/logo-msn.png';
import Documents from './Documents';
import Contact from './Contact';
import soundWizz from '../sound/wizz.mp3';

const Démarrer = () => {
  const [isDocumentsModalOpen, setIsDocumentsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); 
  const [clickedWindowsMessenger, setClickedWindowsMessenger] = useState(false);
  const avatarRef = useRef(null);

  useEffect(() => {
    if (clickedWindowsMessenger && avatarRef.current) {
      avatarRef.current.classList.add('vibrate'); 
      setTimeout(() => {
        avatarRef.current.classList.remove('vibrate'); 
        setClickedWindowsMessenger(false); 
      }, 1000); 
    }
  }, [clickedWindowsMessenger]); 

  const openDocumentsModal = () => {
    setIsDocumentsModalOpen(true);
  };

  const closeDocumentsModal = () => {
    setIsDocumentsModalOpen(false);
  };

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  const playWizzSound = () => {
    const audio = new Audio(soundWizz);
    audio.volume = 0.3;
    audio.play();
    setClickedWindowsMessenger(true); 
  }

  return (
    <div className="démarrer-container">
      <div className="démarrer-haut">
        <img src={avatar} alt="avatar" ref={avatarRef}/>
        <p>Machrouh Nathan</p>
      </div>

      <div className="démarrer-colonnes">
        <div className="démarrer-gauche">
          <ul>
            <li><img src={logoInternetExplorer} alt="logo Internet Explorer" className="logo-démarrer" />Internet</li>
            <li onClick={openContactModal}><img src={logoMail} alt="logo outlook express" className="logo-démarrer" />Courrier électronique</li>
          </ul>
          <img src={separeteurGris} alt="separeteur" />
          <ul>
            <li onClick={playWizzSound}><img src={logoMsn} alt="logo MSN" className="logo-msn" />Windows Messenger</li>
          </ul>

          <img src={separeteurGris} alt="separeteur" className="separateur-programmes" />

          <div className="tous-programmes">
            <p>Tous les programmes</p>
            <img src={logoFlecheVerte} alt="logo fleche verte" />
          </div>
        </div>

        <div className="démarrer-droite">
          <ul>
            <li className="texte-gras" onClick={openDocumentsModal}><img src={logoDocuments} alt="logo mes documents" />Mes documents</li>
            <li className="texte-gras"><img src={logoDocumentsRecents} alt="logo des documents recents" />Mes documents récents</li>
            <li className="texte-gras"><img src={logoImages} alt="logo mes images" />Mes images</li>
            <li className="texte-gras"><img src={logoMusiques} alt="logo ma musique" />Ma musique</li>
            <li className="texte-gras"><img src={logoPosteTravail} alt="logo poste de travail" />Poste de travail</li>
            <li className="texte-gras"><img src={logoFavorisReseau} alt="logo favoris reseau" />Favoris réseau</li>
            <img src={separateurBleu} alt="separeteur" className="separateur-bleu" />
            <li><img src={logoPanneauConfig} alt="logo panneau de config" />Panneau de configuration</li>
            <li><img src={logoImprimantes} alt="logo imprimantes" />Imprimantes et télécopieurs</li>
            <img src={separateurBleu} alt="separeteur" className="separateur-bleu" />
            <li><img src={logoHelp} alt="logo aide et support" />Aide et support</li>
            <li><img src={logoLoupe} alt="logo d'une loupe" />Rechercher</li>
            <li><img src={logoExecuter} alt="logo executer" />Exécuter...</li>
          </ul>
        </div>
      </div>

      <div className="démarrer-bas">
        <div className="stop-session">
          <img src={stopSession} alt="avatar" />
          <p>Fermer la session</p>
        </div>

        <div className="stop-computeur">
          <img src={stopComputer} alt="avatar" />
          <p>Arrêter l'ordinateur</p>
        </div>
      </div>

      <CustomModal
        isOpen={isDocumentsModalOpen}
        onClose={closeDocumentsModal}
        title="Mes documents"
        content={<Documents />}
      />

      <CustomModal
        isOpen={isContactModalOpen}
        onClose={closeContactModal}
        title="Contact"
        content={<Contact />}
      />
    </div>
  );
}

export default Démarrer;
