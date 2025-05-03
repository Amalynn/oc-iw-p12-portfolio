import Header from "../components/Header";
import ImgError404 from "../assets/images/errors/error404.webp";
import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <>
            <Header />
            <main>
                <section className="main-container error">
                    <div className="error-image">
                        <img src={ImgError404} alt="" />
                        <p>
                            <a href="https://fr.freepik.com/vecteurs-libre/erreur-404-illustration-concept-paysage_20602785.htm#fromView=image_search_similar&page=1&position=0&uuid=de0a3218-31ee-4a57-9944-bac09c89ad99&query=404+error">
                                Image de storyset sur Freepik
                            </a>
                        </p>
                    </div>
                    <div className="error-content">
                        <h1>La page demandée est introuvable</h1>
                        <Link to="/" className="button error-button">
                            Retour à l&apos;acceuil
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}
