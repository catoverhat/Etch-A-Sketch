import { Fragment, useLayoutEffect, useState } from "react";
import Buttons from "./buttons";
import "./grid.css";

const Grid = () => {
  const [gridSize, setGridSize] = useState(16);
  const [cells, setCells] = useState("");

  const gridSizeHandler = (event) => {
    setGridSize(event.target.value);
  };

  useLayoutEffect(() => {
    const skecht = () => {
      const gridCells = [];
      for (let index = 0; index < gridSize ** 2; index++) {
        gridCells.push(<div key={index}></div>);
      }
      // console.log('tst');
      setCells(gridCells);
    };
    skecht();
  }, [gridSize]);

  const handleHover = (event) => {
    event.target.classList.add("active");
  };

  const clearGrid = () => {
    setCells([]);
  };

  return (
    <Fragment>
      <div
        onMouseOver={handleHover}
        className="grid-container"
        style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
      >
        {cells}
      </div>

      <Buttons clearGrid={clearGrid} changeGridSize={gridSizeHandler} size={gridSize}/>
    </Fragment>
  );
};

export default Grid;
