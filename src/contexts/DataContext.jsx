import { createContext } from "react";
import data from "../data/data.json";
import PropTypes from "prop-types";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
