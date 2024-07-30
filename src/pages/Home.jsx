import ScrollToTop from "../components/ScrollToTop.jsx";
import TitleSection from "../components/TitleSection.jsx";
import AproposContent from "../containers/AproposContent.jsx";
import SkillList from "../containers/SkillList.jsx";


export default function Home() {
    return ( <>
            <main>
                <section id="apropos" className="container-flex--center" >
                    <div className="main-container">
                        <TitleSection 
                            title="Parlez-moi de vous..."
                            number="01"
                        />
                        <AproposContent />
                    </div>
                </section>
                <section id="skills" className="section-bg--gray container-flex--center">
                    <div className="main-container">
                        <TitleSection 
                            title="Des compétences à votre services"
                            number="02"
                        />
                        <SkillList />
                    </div>
                </section>
                <section id="projects" className="container-flex--center">
                    <div className="main-container">
                        <TitleSection 
                            title="Des projets enrichissants"
                            number="03"
                        />
                    </div>
                </section>
                <section id="contact" className="section-bg--gray container-flex--center">
                    <div className="main-container">
                        <TitleSection 
                            title="Restons en contact"
                            number="04"
                        />
                    </div>
                </section>
                <section className="scroll-to-top-section">
                    <div className="container-flex-end">
                        <ScrollToTop />
                    </div>                    
                </section>

            </main>
            
        </>
    )
}