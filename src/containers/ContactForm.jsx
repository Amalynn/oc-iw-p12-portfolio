export default function ContactForm() {
    return (
        <form action="" className="form">
            <div className="form-input">
                <label htmlFor="firstname">Prénom</label>
                <div className="form-input-icon">
                    <i className="fa-solid fa-user"></i>
                </div>
                <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    placeholder="Votre prénom"
                    className="form-input-field"
                />
            </div>
            <div className="form-input">
                <label htmlFor="lastname">Nom</label>
                <div className="form-input-icon">
                    <i className="fa-solid fa-user"></i>
                </div>
                <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    placeholder="Votre nom"
                    className="form-input-field"
                />
            </div>
            <div className="form-input">
                <label htmlFor="user-email">Email</label>
                <div className="form-input-icon">
                    <i className="fa-solid fa-envelope"></i>
                </div>
                <input
                    type="email"
                    name="user-email"
                    id="user-email"
                    placeholder="exemple@gmail.com"
                    className="form-input-field"
                />
            </div>
            <div className="form-input">
                <label htmlFor="email-object">Objet</label>
                <div className="form-input-icon">
                    <i className="fa-solid fa-user"></i>
                </div>
                <input
                    type="text"
                    name="email-object"
                    id="email-object"
                    placeholder="Demande de renseignement"
                    className="form-input-field"
                />
            </div>
            <div className="form-input">
                <label htmlFor="email-message">Votre message</label>
                <textarea
                    name="email-message"
                    id="email-message"
                    className="form-input-field"
                    rows={15}
                    placeholder="Votre message"
                />
            </div>
        </form>
    );
}
