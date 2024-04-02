
const Projets = ({ projet }) => {
    return (
        <div className="projets-container">
            <ul>
                <li>
                    <p><span>Titre:</span> {projet.titre} </p>
                    <p><span>Description:</span> {projet.description} </p>
                    <p><span>Competence:</span> {projet.competence} </p>
                    <p><span>Techno:</span> {projet.techno} </p>
                    <p><span>Lien du répo:</span> <a href={projet.lien} target="_blank">ICI</a></p>
                    <p><span>Démo:</span> <a href={projet.demo} target="_blank">ICI</a></p>
                </li>
            </ul>
        </div>
    );
}

export default Projets;
