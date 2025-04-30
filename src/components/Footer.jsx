import SocialMedia from "./SocialMedia.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="scroll-to-top-section">
                <ScrollToTop />
            </div>
            <div className="footer-media-social-group">
                <SocialMedia
                    href="mailto:am.ebner@laposte.net"
                    icon="fa-solid fa-envelope"
                />
                <SocialMedia
                    href="https://github.com/Amalynn"
                    icon="fa-brands fa-github"
                />
                <SocialMedia
                    href="https://www.linkedin.com/in/amandine-ebner/"
                    icon="fa-brands fa-linkedin-in"
                />
            </div>
            <Link to="/mentions-legales-credits" className="footer-credits">
                Mentions égales & Crédits{" "}
            </Link>
            <p>© 2024 - Amandine EBNER </p>
        </footer>
    );
}
