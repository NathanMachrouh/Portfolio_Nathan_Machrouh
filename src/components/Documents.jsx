import logoGithub from '../assets/logo-github.png'
import logoCV from '../assets/logo-cv.png'

function Documents() {
    return (
        <div className="documents-container">
            <div className="documents">
                <img src={logoCV} alt="Logo du CV" />
                <p>CV</p>
                <img src={logoGithub} alt="Logo Github" />
                <p>Github</p>
            </div>
        </div>
    );
}

export default Documents;


