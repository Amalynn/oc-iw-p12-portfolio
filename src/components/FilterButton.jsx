import PropTypes from "prop-types";

export default function FilterButton({ children, classNames, ...rest }) {
    return (
        <button className={`filter-button ${classNames}`} {...rest}>
            {children}
        </button>
    );
}

FilterButton.propTypes = {
    children: PropTypes.string.isRequired,
    classNames: PropTypes.string.isRequired,
};
