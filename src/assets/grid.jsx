import { Fragment, useState } from "react";
import "./grid.css";

const Grid = () => {
  const [gridSize, setGridSize] = useState(16);
  const [cells, setCells] = useState("");

  const skecht = () => {
    const gridCells = [];
    for (let index = 0; index < gridSize ** 2; index++) {
      gridCells.push(<div key={index}>{index}</div>);
    }
    // console.log('tst');
    setCells(gridCells);
  };

  const handleHover = (event) => {
    event.target.classList.add("active");
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
      <button onClick={skecht}>pruebas</button>
      <button onClick={skecht}>clear</button>
    </Fragment>
  );
};

export default Grid;
