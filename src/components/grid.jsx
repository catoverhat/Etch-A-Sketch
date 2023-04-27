import { Fragment, useState } from "react";
import Buttons from "./buttons";
import "./grid.css";

const Grid = ({ isMouseDown }) => {
  const cellDataStructure = { state: false, color: "#ffffff" };
  const [gridSize, setGridSize] = useState(4);
  const [cells, setCells] = useState(
    Array(gridSize ** 2).fill(cellDataStructure)
  );
  const [pickColor, setPickColor] = useState("#000000");
  const [eraseState, setEraseState] = useState(false);
  const [colorState, setColorState] = useState(false);
  const [rainbowState, setRainbowState] = useState(false);

  const colorModeHandler = () => {
    setColorState(true);
    setRainbowState(false);
    setEraseState(false);
  };
  const rainbowModeHandler = () => {
    setColorState(false);
    setRainbowState(true);
    setEraseState(false);
  };

  const eraseStateHandler = () => {
    setColorState(false);
    setRainbowState(false);
    setEraseState(true);
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

  const getRandomColor = () => {
    const hexDigits = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexDigits[Math.floor(Math.random() * 16)];
    }
    rainbowState && setPickColor(color);;
  };

  const colorPaletteHandler = ({ target: { value } }) => {
    colorState && setPickColor(value);
  };
  const mouseDownHandler = (index) => {
    getRandomColor()
    setCells((prevState) => updateCell(prevState, index, true, pickColor));
  };

  const hoverHandler = (index) => {
    if (isMouseDown) {
      getRandomColor()
      setCells((prevState) => updateCell(prevState, index, true, pickColor));
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
        size={gridSize}
        changeColor={colorPaletteHandler}
        eraseGrid={eraseStateHandler}
        colorMode={colorModeHandler}
        rainbowMode={rainbowModeHandler}
      />
      <div
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {cells.map((active, index) => (
          <div
            key={index}
            onMouseDown={
              eraseState
                ? () => eraseDownHandler(index)
                : () => mouseDownHandler(index)
            }
            onMouseOver={
              eraseState
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
