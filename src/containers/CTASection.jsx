import EmailButton from "../components/buttons/EmailButton";
import DownloadCvButton from "../components/buttons/DownloadCvButton";

export default function CTASection() {
    return (
        <section className="cta-section">            
            <div className="cta-section-content">
                <h3>Envie d&apos;en apprendre plus !</h3>
                <p>N&apos;hésitez pas à télécharger mon CV ou à me contacter</p>
                <div className="button-group">
                    <DownloadCvButton />
                    <EmailButton />
                </div>
            </div>                    
        </section>
    );
}