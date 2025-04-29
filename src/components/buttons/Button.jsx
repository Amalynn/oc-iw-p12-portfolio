import PropTypes from "prop-types";

export default function Button({ href, classesNames, children }) {
    return (
        <a href={href} className={classesNames} target="_blank">
            {children}
        </a>
    );
}

Button.propTypes = {
    href: PropTypes.string.isRequired,
    classesNames: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
