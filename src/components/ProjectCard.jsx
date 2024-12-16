import PropTypes from "prop-types";

export default function ProjectCard({ title, srcImage, altImage, label }) {
    return (
        <article className="project-card">
            <div className="project-card-image">
                <img src={srcImage} alt={altImage} />
            </div>
            <div className="project-card-label">{label}</div>
            <div className="project-card-title">
                <h3>{title}</h3>
            </div>
        </article>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    srcImage: PropTypes.string.isRequired,
    altImage: PropTypes.string,
    label: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
    alt: "image",
};
