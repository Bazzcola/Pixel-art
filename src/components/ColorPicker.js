import React from "react";
import { useStyles } from "./ColorPicker.styles";

export const ColorPicker = ({ currentColor, setCurrentColor }) => {
  const classes = useStyles();
  const colorChange = (event) => {
    setCurrentColor(event.target.value);
  };
  return (
    <input
      className={classes.colorPicker}
      type="color"
      value={currentColor}
      onChange={colorChange}
    />
  );
};
