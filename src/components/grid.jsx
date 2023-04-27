import { Fragment, useState } from "react";
import Buttons from "./buttons";
import "./grid.css";

const Grid = ({ isMouseDown }) => {
  const [gridSize, setGridSize] = useState(3);
  // const [cells, setCells] = useState("");
  const [clear, setClear] = useState(false);
  const [cells, setCells] = useState(
    Array(gridSize ** 2).fill({ state: false, color: "#ffffff" })
  );
  const [pickColor, setPickColor] = useState("#000000");

  const colorPaletteHandler = ({ target: { value } }) => {
    setPickColor(value);
  };

  const gridSizeHandler = ({ target: { value } }) => {
    setGridSize(value);
    setCells(Array(value ** 2).fill({ state: false, color: "#ffffff" }));
  };

  const handleHover = (index) => {
    if (isMouseDown) {
      setCells((prevState) => {
        const newState = [...prevState];
        newState[index] = { state: true, color: pickColor };

        // console.log(newState);
        return newState;
      });
    }
  };
  // console.log(cells);
  // const handleHover = (index) => isMouseDown && setCells({...cells, state:true})

  const clearGrid = () => {
    setCells(Array(gridSize ** 2).fill({ state: false, color: "#ffffff" }));
  };

  return (
    <Fragment>
      <Buttons
        clearGrid={clearGrid}
        changeGridSize={gridSizeHandler}
        size={gridSize}
        changeColor={colorPaletteHandler}
      />
      <div
        // onMouseOver={handleHover}
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {/* {cells} */}

        {cells.map((active, index) => (
          <div
            key={index}
            onMouseOver={() => handleHover(index)}
            style={{ backgroundColor: active.color }}
          ></div>
        ))}
      </div>
    </Fragment>
  );
};

export default Grid;
