import compétences from '../data/compétences.json';

const Competences = () => {
    return (
        <div className="competences-container">
            <p className="competences-title">Liste des compétences:</p>
            <div className="competences-liste">
                {compétences.map((compétences, index) => (
                    <p key={index}><span>- {compétences}</span></p>
                ))}
            </div>
        </div>
    );
};

export default Competences;
