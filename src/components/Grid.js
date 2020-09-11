import React from "react";
import { useStyles } from "./Grid.styles";

export const Grid = ({ currentColor, cells, setCells }) => {
  const offCell = {
    on: false,
    color: "#FFFFFF",
  };
  const classes = useStyles();

  const updateCell = (i, defaultState) => (e) => {
    e.preventDefault();
    setCells(
      cells.map((cell, cellIndex) => {
        if (cellIndex === i) {
          if (defaultState) return defaultState;
          return {
            on: true,
            color: currentColor,
          };
        }
        return cell;
      })
    );
  };
  return (
    <div className={classes.grid}>
      {cells.map((cell, i) => (
        <div
          className={classes.cell}
          key={i}
          style={{ background: cell.on ? cell.color : "#FFFFFF" }}
          onClick={updateCell(i)}
          onContextMenu={updateCell(i, offCell)}
        ></div>
      ))}
    </div>
  );
};
