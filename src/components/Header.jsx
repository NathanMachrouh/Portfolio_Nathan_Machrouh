/* eslint-disable jsx-a11y/img-redundant-alt */
import logoDocuments from '../assets/logo-documents.png';
import logoDossier from '../assets/logo-dossier.png';
import logoMail from '../assets/logo-mail.png'
import projets from '../data/projets.json';
import Contact from './Contact';
import Documents from './Documents';


function Header({ openModal }) {
    return (
        <div className="header-container">
            <div className="mes-documents">
            <img src={logoDocuments} alt="logo mes documents" onClick={() => openModal("Documents", <Documents />)} />
            <p>Mes documents</p>
            <img src={logoMail} alt="Logo de mail" onClick={() => openModal("Outlook express", <Contact />)} />
            <p>Outlook</p><p>express</p>
            </div>
            <div className="projets">
                {projets.map((project, index) => (
                    <div key={index}>
                        <img src={logoDossier} alt={`Image de ${project.titre}`} />
                        <p>{project.titre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Header;
