import { Fragment, useLayoutEffect, useState } from "react";
import Buttons from "./buttons";
import "./grid.css";

const Grid = ({ isMouseDown }) => {
  const [gridSize, setGridSize] = useState(16);
  // const [cells, setCells] = useState("");
  const [clear, setClear] = useState(false);
  const [cells, setCells] = useState(Array(gridSize ** 2).fill(false));

  // const gridSizeHandler = (event) => {
  //   setGridSize(event.target.value);
  // };

  const gridSizeHandler = (event) => {
    setGridSize(event.target.value);
    setCells(Array(event.target.value ** 2).fill(false));
  };

  // useLayoutEffect(() => {
  //   const skecht = () => {
  //     const gridCells = [];
  //     for (let index = 0; index < gridSize ** 2; index++) {
  //       gridCells.push(<div key={index}></div>);
  //     }
  //     // console.log('tst');
  //     setCells(gridCells);
  //   };
  //   skecht();
  // }, [gridSize]);

  // const handleHover = (event) => {
  //   if (isMouseDown) {
  //     event.target.classList.add("active");
  //   }
  // };

  const handleHover = (index) => {
    if (isMouseDown) {
      setCells((prevState) => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      });
    }
  };

  const clearGrid = () => {
    setCells(Array(gridSize ** 2).fill(false));
  };

  return (
    <Fragment>
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
            className={active ? "active" : ""}
          ></div>
        ))}
      </div>

      <Buttons
        clearGrid={clearGrid}
        changeGridSize={gridSizeHandler}
        size={gridSize}
      />
    </Fragment>
  );
};

export default Grid;
