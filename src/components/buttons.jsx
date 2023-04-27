import "./button.css";

const Buttons = ({
  clearGrid,
  eraseGrid,
  changeGridSize,
  size,
  changeColor,
  colorMode,
  rainbowMode,
}) => {
  return (
    <div className="btn-container">
      <div className="color-palette">
        <input type="color" id="brush" name="brush" onChange={changeColor} />
      </div>
      <button onClick={colorMode}>color mode</button>
      <button onClick={rainbowMode}>rainbow</button>
      <button onClick={eraseGrid}>erase</button>
      <button onClick={clearGrid}>clear</button>
      <div className="grid-size">
        <label htmlFor="gridSize">{`${size} x ${size}`}</label>
        <input
          value={size}
          onChange={changeGridSize}
          type="range"
          id="gridSize"
          name="gridSize"
          min="1"
          max="64"
        />
      </div>
    </div>
  );
};

export default Buttons;
