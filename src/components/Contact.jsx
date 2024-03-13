
function Contact() {
    return (
        <div className="contact-container">
            <form>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" name="nom" required />

                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="sujet">Sujet</label>
                <input type="text" id="sujet" name="sujet" required />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>

                <input type="submit" value="Envoyer" />
            </form>
        </div>
    );
}

export default Contact;
