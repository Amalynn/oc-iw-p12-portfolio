import { useEffect, useState } from "react";
import NavbarMobile from "./navbar/NavbarMobile";
import NavbarDesktop from "./navbar/NavbarDesktop";
import Navbar from "./navbar/Navbar";
import { useLocation } from "react-router-dom";

export default function Header() {
    const [scrolling, setScrolling] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        function handleScrolling() {
            if (window.scrollY >= 80) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        }

        window.addEventListener("scroll", handleScrolling);
        return () => window.removeEventListener("scroll", handleScrolling);
    }, []);

    function handleClick() {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }

    return location.pathname === "/" ? (
        <header className={scrolling ? "header header-scrolled" : "header"}>
            <button className="button-menu" onClick={handleClick}>
                <i className="fa-solid fa-bars"></i>
            </button>
            <NavbarMobile
                isActive={isOpen}
                onLinkClick={() => setIsOpen(false)}
            />
            <NavbarDesktop />
        </header>
    ) : (
        <header className="header-page">
            <Navbar />
        </header>
    );
}
