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

  const colorPaletteHandler = ({ target: { value } }) => {
    setPickColor(value);
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

  const hoverHandler = (index) => {
    if (isMouseDown) {
      setCells((prevState) => updateCell(prevState, index, true, pickColor));
    }
  };

  const mouseDownHandler = (index) => {
    setCells((prevState) => updateCell(prevState, index, true, pickColor));
  };

  const eraseStateHandler = () => {
    setEraseState(true);
  };

  const eraseHoverHandler = (index) => {
    if (isMouseDown) {
      setCells((prevState) => updateCell(prevState, index, false, "#ffffff"));
    }
  };

  const eraseDownHandler = (index) => {
    setCells((prevState) => updateCell(prevState, index, false, "#ffffff"));
  };

  const clearGrid = () => {
    setCells(Array(gridSize ** 2).fill(cellDataStructure));
    setEraseState(false);
  };

  return (
    <Fragment>
      <Buttons
        clearGrid={clearGrid}
        changeGridSize={gridSizeHandler}
        size={gridSize}
        changeColor={colorPaletteHandler}
        eraseGrid={eraseStateHandler}
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
