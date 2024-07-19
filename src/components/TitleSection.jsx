import PropTypes from 'prop-types';

export default function TitleSection({title, number}) {
    return (
        <div className="title-section">
            <h2 className="title-section-h2">{title}</h2> 
            <span className="title-section-number">{number}</span>
        </div>
    )
}

TitleSection.propTypes = {
    title: PropTypes.string.isRequired,    
    number: PropTypes.string.isRequired
}