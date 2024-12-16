import PropTypes from "prop-types";

export default function FilterButton({ children }) {
    return <button className="filter-button">{children}</button>;
}

FilterButton.propTypes = {
    children: PropTypes.string.isRequired,
};
