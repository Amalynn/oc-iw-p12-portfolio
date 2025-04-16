import PropTypes from "prop-types";

export default function NavbarMobile({ isActive, onLinkClick }) {
    return (
        <nav className={`header-navbar-mobile ${isActive ? "active" : ""}`}>
            <ul>
                <li>
                    <a href="#accueil" onClick={onLinkClick}>
                        <i className="fa-solid fa-house"></i>
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#apropos" onClick={onLinkClick}>
                        <i className="fa-solid fa-circle-info"></i>A propos
                    </a>
                </li>
                <li>
                    <a href="#skills" onClick={onLinkClick}>
                        <i className="fa-solid fa-gear"></i>
                        Compétences
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={onLinkClick}>
                        <i className="fa-solid fa-lightbulb"></i>
                        Projets
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={onLinkClick}>
                        <i className="fa-solid fa-comments"></i>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

NavbarMobile.propTypes = {
    isActive: PropTypes.bool,
    onLinkClick: PropTypes.func,
};
