import PropTypes from "prop-types";

export default function SkillCard({ icon, name, description }) {
    return (
        <article className="skill-card">
            <div className="skill-card-header">
                <i className={icon}></i>
            </div>
            <div className="skill-card-body">
                <h3>{name}</h3>
                <p>
                    {description.map((part, index) => {
                        if (typeof part === "string") {
                            return part;
                        } else if (part.highlighted) {
                            return (
                                <span className="highlight" key={index}>
                                    {part.text}
                                </span>
                            );
                        } else {
                            return part.text;
                        }
                    })}
                </p>
            </div>
        </article>
    );
}

SkillCard.propTypes = {
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
