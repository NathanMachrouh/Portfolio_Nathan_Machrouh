import logoGithub from '../assets/logo-github.png';
import logoCV from '../assets/logo-cv.png';
import logoLinkedin from '../assets/logo-linkedin.png';

function Documents() {
    return (
        <div className="documents-container">
            <div className="documents">
                <div className="document">
                <a href="https://drive.google.com/file/d/1EYGy_46teQMtQ5p5R4sbTXxBLkWO6Nea/view?pli=1" target="_blank" rel="noopener noreferrer">
                        <img src={logoCV} alt="Logo CV" />
                        <p>CV</p>
                    </a>
                </div>
                <div className="document">
                    <a href="https://github.com/NathanMachrouh" target="_blank" rel="noopener noreferrer">
                        <img src={logoGithub} alt="Logo Github" />
                        <p>Github</p>
                    </a>
                </div>
                <div className="document">
                <a href="https://www.linkedin.com/in/nathan-machrouh/" target="_blank" rel="noopener noreferrer">
                        <img src={logoLinkedin} alt="Logo Linkedin" />
                        <p>Linkedin</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Documents;
