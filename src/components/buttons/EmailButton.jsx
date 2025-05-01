import Button from "./Button";
import PropTypes from "prop-types";

export default function EmailButton({ classesNames }) {
    return (
        <Button
            href="mailto:am.ebner@laposte.net"
            classesNames={`button button-email ${classesNames}`}
        >
            Contactez-moi !
        </Button>
    );
}

EmailButton.propTypes = {
    classesNames: PropTypes.string,
};
