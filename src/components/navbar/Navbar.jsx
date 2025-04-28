import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="main-container header-navbar">
            <ul>
                <li onClick={() => navigate(-1)}>
                    <i className="fa-solid fa-arrow-left"></i>
                </li>
                <li>
                    <Link to="/">
                        <i className="fa-solid fa-house"></i>
                        Accueil
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
