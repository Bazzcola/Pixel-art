import {
    createUseStyles
} from "react-jss";

export const useStyles = createUseStyles({
    app: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    colorSwatchContainer: {
        display: 'flex',
    },
    colorSwatch: {
        margin: '1rem',
        padding: '0',
        width: '50px',
        height: '50px',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
    }
});