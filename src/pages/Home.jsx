import ScrollToTop from "../components/ScrollToTop.jsx";
import TitleSection from "../components/TitleSection.jsx";
import AproposContent from "../containers/AproposContent.jsx";
import CTASection from "../containers/CTASection.jsx";
import ProjectsSection from "../containers/ProjectsSection.jsx";
import SkillsSection from "../containers/SkillsSection.jsx";
import Hero from "../components/Hero.jsx";
import Header from "../components/Header.jsx";

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
                    <div className="main-container">
                        <TitleSection title="Restons en contact" number="04" />
                    </div>
                </section>
                <section className="scroll-to-top-section">
                    <div className="container-flex-end">
                        <ScrollToTop />
                    </div>
                </section>
            </main>
        </>
    );
}
