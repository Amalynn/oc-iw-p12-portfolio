import heroImageXs from "../assets/images/hero/hero-xs.webp";
import heroImageSm from "../assets/images/hero/hero-sm.webp";
import heroImageMd from "../assets/images/hero/hero-md.webp";
import heroImageXl from "../assets/images/hero/hero-xl.jpg";
import DownloadCvButton from "./buttons/DownloadCvButton";
import EmailButton from "./buttons/EmailButton";

export default function Hero() {
    return (
        <section className="hero">
            <picture>
                <source media="(max-width: 400px)" srcSet={heroImageXs} />
                <source media="(max-width: 600px)" srcSet={heroImageSm} />
                <source media="(max-width: 1200px)" srcSet={heroImageMd} />
                <img className="hero-image" src={heroImageXl} alt="" />
            </picture>

            <div className="hero-content">
                <p>Amandine EBNER</p>
                <h1>Développeuse Front-end ReactJS</h1>
                <p>Concevoir. Développer. Innover</p>
                <p>
                    Des compétences transverses au service de tous vos projets
                </p>
                <div className="button-group hero-button-group">
                    <DownloadCvButton />
                    <EmailButton />
                </div>
            </div>
        </section>
    );
}
