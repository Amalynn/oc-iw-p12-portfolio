import PropTypes from 'prop-types';

export default function SkillCard({icon, name, description}) {
    return (
        <article className="skill-card">
            <div className="skill-card-header">
                <i className={icon}></i>
            </div>
            <div className="skill-card-body">
                <h4>{name}</h4>
                <p>{description}</p>
            </div>
        </article>
    )
}

SkillCard.propTypes = {
    icon: PropTypes.string.isRequired,    
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}