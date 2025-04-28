import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProjectCard({
    title,
    srcImage,
    altImage = "image",
    label,
    name,
}) {
    return (
        <Link to={`/project/${name}`}>
            <article className="project-card">
                <div className="project-card-image">
                    <img src={srcImage} alt={altImage} />
                </div>
                <div className="project-card-label">{label}</div>
                <div className="project-card-title">
                    <h3>{title}</h3>
                </div>
            </article>
        </Link>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    srcImage: PropTypes.string.isRequired,
    altImage: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
