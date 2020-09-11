import React, { useState, useMemo } from "react";
import { Grid } from "./components/Grid";
import { useStyles } from "./App.styles";
import { ColorPicker } from "./components/ColorPicker";

const offCell = {
  on: false,
  color: "#FFFFFF",
};
const initialCells = Array.from({ length: 400 }, () => offCell);

function App() {
  const classes = useStyles();
  const [cells, setCells] = useState(initialCells);
  const [currentColor, setCurrentColor] = useState("#FFFFFF");
  const colorSwatch = useMemo(
    () => [
      ...new Set(cells.filter((cell) => cell.on).map((cell) => cell.color)),
    ],
    [cells]
  );
  const clearArea = () => {
    setCells(initialCells);
  };
  return (
    <div className={classes.app}>
      <button onClick={clearArea} className={classes.clear}>
        CLEAR
      </button>
      <ColorPicker
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />
      <div className={classes.colorSwatchContainer}>
        {colorSwatch.map((color) => (
          <div
            onClick={() => setCurrentColor(color)}
            key={color}
            className={classes.colorSwatch}
            style={{ background: color }}
          ></div>
        ))}
      </div>
      <Grid currentColor={currentColor} cells={cells} setCells={setCells} />
    </div>
  );
}

export default App;
