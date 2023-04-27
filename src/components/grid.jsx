import { Fragment, useState } from "react";
import Buttons from "./buttons";
import "./grid.css";

const Grid = ({ isMouseDown }) => {
  const cellDataStructure = { state: false, color: "#ffffff" };
  const [gridSize, setGridSize] = useState(16);
  const [cells, setCells] = useState(
    Array(gridSize ** 2).fill(cellDataStructure)
  );
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [mode, setMode] = useState("");

  const colorModeHandler = () => {
    setMode("color");
  };

  const rainbowModeHandler = (event) => {
    setMode("rainbow");
  };

  const eraseStateHandler = () => {
    setMode("erase");
  };

  const gridSizeHandler = ({ target: { value } }) => {
    setGridSize(value);
    setCells(Array(value ** 2).fill(cellDataStructure));
  };

  const updateCell = (prevState, index, state, color) => {
    const newState = [...prevState];
    newState[index] = { state, color };
    return newState;
  };

  const colorPaletteHandler = ({ target: { value } }) => {
    setSelectedColor(value);
  };

  const getRandomColor = () => {
    const hexDigits = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexDigits[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const mouseDownHandler = (index) => {
    mode === "color" &&
      setCells((prevState) =>
        updateCell(prevState, index, true, selectedColor)
      );
    mode === "rainbow" &&
      setCells((prevState) =>
        updateCell(prevState, index, true, getRandomColor())
      );
  };

  const hoverHandler = (index) => {
    if (isMouseDown) {
      mode === "color" &&
        setCells((prevState) =>
          updateCell(prevState, index, true, selectedColor)
        );
      mode === "rainbow" &&
        setCells((prevState) =>
          updateCell(prevState, index, true, getRandomColor())
        );
    }
  };

  const eraseDownHandler = (index) => {
    setCells((prevState) => updateCell(prevState, index, false, "#ffffff"));
  };

  const eraseHoverHandler = (index) => {
    if (isMouseDown) {
      setCells((prevState) => updateCell(prevState, index, false, "#ffffff"));
    }
  };

  const clearGridHandler = () => {
    setCells(Array(gridSize ** 2).fill(cellDataStructure));
  };

  return (
    <Fragment>
      <Buttons
        clearGrid={clearGridHandler}
        changeGridSize={gridSizeHandler}
        changeColor={colorPaletteHandler}
        eraseGrid={eraseStateHandler}
        colorMode={colorModeHandler}
        rainbowMode={rainbowModeHandler}
        gridSize={gridSize}
        mode={mode}
      />
      <div
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {cells.map((active, index) => (
          <div
            key={index}
            onMouseDown={
              mode === "erase"
                ? () => eraseDownHandler(index)
                : () => mouseDownHandler(index)
            }
            onMouseOver={
              mode === "erase"
                ? () => eraseHoverHandler(index)
                : () => hoverHandler(index)
            }
            style={{ backgroundColor: active.color }}
          ></div>
        ))}
      </div>
    </Fragment>
  );
};

export default Grid;
