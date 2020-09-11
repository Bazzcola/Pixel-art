import {
    createUseStyles
} from "react-jss";

export const useStyles = createUseStyles({
    grid: {
        display: "grid",
        gridTemplateRows: "repeat(20, 1fr)",
        gridTemplateColumns: "repeat(20, 1fr)",
        width: '70vh',
        height: "50vh",
        outline: "2px black solid",
    },
    cell: {
        background: "white",
        border: "2px black solid",
        cursor: "pointer",
        transition: "all 0.2s",
        '&:hover': {
            transform: "scale(1.2)",
        }
    }
});