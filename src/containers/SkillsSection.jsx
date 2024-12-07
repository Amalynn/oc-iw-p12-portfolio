import SkillList from "../containers/SkillList.jsx";
import TitleSection from "../components/TitleSection.jsx";

export default function SkillsSection() {
    return (
        <section id="skills" className="section-bg--gray container-flex--center">
            <div className="main-container">
                <TitleSection 
                    title="Des compétences à votre services"
                    number="02"
                />
                <SkillList />
            </div>
        </section>
    )
}