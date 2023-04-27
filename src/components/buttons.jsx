import "./button.css";

const Buttons = ({
  clearGrid,
  eraseGrid,
  changeGridSize,
  gridSize,
  changeColor,
  colorMode,
  rainbowMode,
  mode,
}) => {
  const selectedButton = () => {
    switch (mode) {
      case "color":
        return "color";
      case "rainbow":
        return "rainbow";
      case "erase":
        return "erase";
      default:
        return "";
    }
  };
  return (
    <div className="btn-container">
      <div className="color-palette">
        <input type="color" id="brush" name="brush" onChange={changeColor} />
      </div>
      <button
        onClick={colorMode}
        className={selectedButton() === "color" ? "active" : ""}
      >
        color mode
      </button>
      <button
        onClick={rainbowMode}
        className={selectedButton() === "rainbow" ? "active" : ""}
      >
        rainbow
      </button>
      <button
        onClick={eraseGrid}
        className={selectedButton() === "erase" ? "active" : ""}
      >
        erase
      </button>
      <button onClick={clearGrid}>clear</button>
      <div className="grid-size">
        <label htmlFor="gridSize">{`${gridSize} x ${gridSize}`}</label>
        <input
          value={gridSize}
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
