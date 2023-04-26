import { Fragment, useState } from "react";

const Buttons = ({ clearGrid, changeGridSize, size }) => {
  return (
    <Fragment>
      <label htmlFor="gridSize">{`${size} x ${size}`}</label>
      <input
        onChange={changeGridSize}
        type="range"
        id="gridSize"
        name="gridSize"
        min="1"
        max="64"
      />

      <button onClick={clearGrid}>clear</button>
    </Fragment>
  );
};

export default Buttons;
