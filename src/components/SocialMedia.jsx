import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

export default function SocialMedia({href, customClassName, icon}) {    
    return (
        <Link to={href} target="_blank" rel="noopener noreferrer" className={`socialmedia ${customClassName}`} >            
            <i className={icon}></i>            
        </Link>
    )       
}

SocialMedia.propTypes = {
    href: PropTypes.string.isRequired,
    customClassName: PropTypes.string,
    icon: PropTypes.string.isRequired
}
