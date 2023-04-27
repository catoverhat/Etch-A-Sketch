import { Fragment, useState } from "react";
import Buttons from "./buttons";
import "./grid.css";

const Grid = ({ isMouseDown }) => {
  const [gridSize, setGridSize] = useState(4);
  const [cells, setCells] = useState(
    Array(gridSize ** 2).fill({ state: false, color: "rgb(255 255 255)" })
  );
  const [pickColor, setPickColor] = useState("#000000");
  const [eraseState, setEraseState] = useState(false);

  const colorPaletteHandler = ({ target: { value } }) => {
    setPickColor(value);
  };

  const gridSizeHandler = ({ target: { value } }) => {
    setGridSize(value);
    setCells(Array(value ** 2).fill({ state: false, color: "#ffffff" }));
  };

  const hoverHandler = (index) => {
    if (isMouseDown) {
      setCells((prevState) => {
        const newState = [...prevState];
        newState[index] = { state: true, color: pickColor };
        return newState;
      });
    }
  };

  const mouseDownHandler = (index) => {
    setCells((prevState) => {
      const newState = [...prevState];
      newState[index] = { state: true, color: pickColor };
      return newState;
    });
  };

  // console.log(cells);
  // const handleHover = (index) => isMouseDown && setCells({...cells, state:true})

  const eraseStateHandler = () => {
    setEraseState(true);
  };

  const eraseHoverHandler = (index) => {
    if (isMouseDown) {
      setCells((prevState) => {
        const newState = [...prevState];
        newState[index] = { state: false, color: "#ffffff" };
        return newState;
      });
    }
  };

  const eraseDownHandler = (index) => {
    setCells((prevState) => {
      const newState = [...prevState];
      newState[index] = { state: false, color: "#ffffff" };
      return newState;
    });
  };

  const clearGrid = () => {
    setCells(Array(gridSize ** 2).fill({ state: false, color: "#ffffff" }));
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
