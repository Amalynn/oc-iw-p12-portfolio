import TitleSection from "../components/TitleSection";
import ProjectsList from "./ProjectsList";

export default function ProjectsSection() {
    return (
        <section id="projects" className="container-flex--center">
            <div className="main-container">
                <TitleSection title="Des projets enrichissants" number="03" />
                <ProjectsList />
            </div>
        </section>
    );
}
