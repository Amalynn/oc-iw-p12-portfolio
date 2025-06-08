import TitleSection from "../components/TitleSection.jsx";
import AproposContent from "../containers/AproposContent.jsx";
import CTASection from "../containers/CTASection.jsx";
import ProjectsSection from "../containers/ProjectsSection.jsx";
import SkillsSection from "../containers/SkillsSection.jsx";
import Hero from "../components/Hero.jsx";
import Header from "../components/Header.jsx";
import ContactForm from "../containers/ContactForm.jsx";
import EmailButton from "../components/buttons/EmailButton.jsx";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <section id="apropos" className="container-flex--center">
                    <div className="main-container">
                        <TitleSection
                            title="Parlez-moi de vous..."
                            number="01"
                        />
                        <AproposContent />
                    </div>
                </section>
                <SkillsSection />
                <CTASection />
                <ProjectsSection />
                <section
                    id="contact"
                    className="section-bg--gray container-flex--center"
                >
                    <div className="main-container contact-container ">
                        <TitleSection title="Restons en contact" number="04" />
                        <div className="contact-introduction">
                            <p>
                                Une idée ? Un projet ? Une demande
                                d&apos;information ?
                            </p>
                            <p>
                                <span className="highlight highlight--color">
                                    Parlons-en ensemble. Contactez-moi !
                                </span>
                            </p>
                        </div>
                        <ContactForm />
                        <div className="contact-button">
                            <EmailButton classesNames="contact-button-email" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
