import { Navigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import ElementsList from "../components/ElementsList";
import Slideshow from "../components/Slideshow";

export default function ProjectDetails() {
    let { name } = useParams();

    const data = useContext(DataContext);

    let projectToDisplay = data.projects.find(
        (project) => project.name === name
    );

    if (!projectToDisplay) {
        return <Navigate to="/error-page-not-found" replace />;
    }

    return (
        <main className="container-flex--center">
            <div className="main-container">
                <h1 className="project-details-title">
                    {projectToDisplay.name}
                </h1>
                <section className="project-details-technologies">
                    <ElementsList
                        list={projectToDisplay.technologies}
                        typeList="row"
                    />
                </section>
                <section className="project-details-content">
                    <div className="project-details-content-group">
                        <Slideshow
                            pictures={projectToDisplay.pictures}
                            title={projectToDisplay.name}
                        />
                        <div className="project-details-content-group-text">
                            <section className="project-details-content-informations">
                                <h2 className="project-details-section-title">
                                    Informations générales
                                </h2>
                                <ul>
                                    <li>
                                        <i className="fa-solid fa-briefcase"></i>
                                        Projet :{" "}
                                        {projectToDisplay.type ??
                                            "Projet non renseigné "}
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-screwdriver-wrench"></i>
                                        Catégorie :{" "}
                                        {projectToDisplay.category ??
                                            "Catégorie non renseignée "}
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-calendar-days"></i>
                                        Année de réalisation du projet :{" "}
                                        {projectToDisplay.year ??
                                            "Année non renseignée "}
                                    </li>
                                    <li>
                                        <i className="fa-brands fa-github"></i>
                                        {projectToDisplay.github ? (
                                            <a
                                                href={projectToDisplay.github}
                                                target="_blank"
                                            >
                                                {projectToDisplay.github}
                                            </a>
                                        ) : (
                                            "Repo GitHub non disponible"
                                        )}
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-globe"></i>
                                        {projectToDisplay.url ? (
                                            <a
                                                href={projectToDisplay.url}
                                                target="_blank"
                                            >
                                                {projectToDisplay.url}
                                            </a>
                                        ) : (
                                            "Site web non disponible"
                                        )}
                                    </li>
                                </ul>
                            </section>
                            <section className="project-details-content-description">
                                <h2 className="project-details-section-title">
                                    Le projet
                                </h2>
                                {projectToDisplay.description &&
                                    projectToDisplay.description.map(
                                        (element, index) => (
                                            <p key={`paragraphe-${index}`}>
                                                {element}
                                            </p>
                                        )
                                    )}
                            </section>
                        </div>
                    </div>

                    <section className="project-details-content-activities">
                        <h2 className="project-details-section-title">
                            Les activités
                        </h2>
                        <ul>
                            {projectToDisplay.activities &&
                                projectToDisplay.activities.map(
                                    (element, index) => (
                                        <li key={`item-${index}`}>{element}</li>
                                    )
                                )}
                        </ul>
                    </section>
                </section>
            </div>
        </main>
    );
}
