import FilterButton from "../components/FilterButton";
import ProjectCard from "../components/ProjectCard";
//import data from "../data/data.json";

export default function ProjectsList() {
    // const categoriesProjectList = new Set(
    //     data?.projects.map((project) => project.categories)
    // ).add("Tous");
    // console.log(categoriesProjectList);
    // return (
    //     <div>
    //         {Array.from(categoriesProjectList).map((category) => {
    //             <FilterButton key={category}>{category}</FilterButton>;
    //         })}
    //     </div>
    // );
    return (
        <>
            <div className="filter-button-group">
                <FilterButton>Tous</FilterButton>
                <FilterButton>React</FilterButton>
                <FilterButton>Gestion de projet</FilterButton>
                <FilterButton>PHP</FilterButton>
                <FilterButton>SEO</FilterButton>
                <FilterButton>Débugage</FilterButton>
            </div>

            <div className="project-card-list">
                <ProjectCard
                    title="Nina Carducci"
                    srcImage="/images/projects/ninacarducci/ninacarducci-cover.jpg"
                    label="SEO"
                />
                <ProjectCard
                    title="CepAtlas"
                    srcImage="/images/projects/cepatlas/cepatlas-cover.jpg"
                    label="PHP"
                />
                <ProjectCard
                    title="724events"
                    srcImage="/images/projects/724events/724events-cover.jpg"
                    label="Débugage"
                />
                <ProjectCard
                    title="Argent Bank"
                    srcImage="/images/projects/argentbank/argentbank-cover.jpg"
                    label="React"
                />
                <ProjectCard
                    title="Kasa"
                    srcImage="/images/projects/kasa/kasa-cover.jpg"
                    label="React"
                />
                <ProjectCard
                    title="Menu Maker"
                    srcImage="/images/projects/menumaker/menumaker-cover.jpg"
                    label="Gestion de projet"
                />
                <ProjectCard
                    title="Portfolio"
                    srcImage="/images/projects/portfolio/portfolio-cover.jpg"
                    label="React"
                />
            </div>
        </>
    );
}
