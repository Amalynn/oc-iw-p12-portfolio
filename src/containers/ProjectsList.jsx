import FilterButton from "../components/FilterButton";
import ProjectCard from "../components/ProjectCard";

import { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";

export default function ProjectsList() {
    const data = useContext(DataContext);
    const [category, setCategory] = useState();
    const [activeCategory, setActiveCategory] = useState("Tous");

    const projectsVisible = data?.projects.filter(
        (project) => project.isVisible === true
    );

    const projectCategoriesList = new Set(
        projectsVisible.map((project) => project.category)
    );

    const filteredProjects = projectsVisible.filter((project) =>
        !category || category === "Tous"
            ? projectsVisible
            : project.category === category
    );

    const handleClickChangeCategory = (event) => {
        let category = event.target.innerText;
        setCategory(category);
        setActiveCategory(category);
    };

    return (
        <>
            <div className="filter-button-group">
                <FilterButton
                    onClick={handleClickChangeCategory}
                    classNames={
                        activeCategory === "Tous" ? "filter-button--active" : ""
                    }
                >
                    Tous
                </FilterButton>
                {projectCategoriesList &&
                    Array.from(projectCategoriesList).map((category) => (
                        <FilterButton
                            key={category}
                            onClick={handleClickChangeCategory}
                            classNames={
                                activeCategory === category
                                    ? "filter-button--active"
                                    : ""
                            }
                        >
                            {category}
                        </FilterButton>
                    ))}
            </div>

            <div className="project-card-list">
                {filteredProjects &&
                    filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.name}
                            srcImage={project.cover}
                            label={project.category}
                            name={project.name}
                        />
                    ))}
            </div>
        </>
    );
}
