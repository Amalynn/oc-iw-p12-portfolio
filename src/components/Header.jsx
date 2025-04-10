export default function Header() {
    return (
        <header className="header">
            <nav className="header-navbar-desktop">
                <ul>
                    <li>
                        <a href="/" className="active">
                            Acceuil
                        </a>
                    </li>
                    <li>
                        <a href="#apropos">A propos</a>
                    </li>
                    <li>
                        <a href="#skills">Compétences</a>
                    </li>
                    <li>
                        <a href="#projects">Projets</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
