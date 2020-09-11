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
        height: '100px',
    },
    colorSwatch: {
        margin: '1rem',
        padding: '0',
        width: '50px',
        height: '50px',
        outline: 'none',
        border: 'none',
        cursor: 'pointer',
    },
    clear: {
        outline: "none",
        fontSize: "14px",
        fontWeight: "600",
        cursor: 'pointer',
    }
});