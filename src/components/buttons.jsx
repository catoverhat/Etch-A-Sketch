import "./button.css";

const Buttons = ({ clearGrid, changeGridSize, size, changeColor }) => {
 
  
  return (
    <div className="btn-container">
      <div className="color-palette">
        <input
          type="color"
          id="brush"
          name="brush"
          onChange={changeColor}
        />
      </div>

      <button onClick={clearGrid}>clear</button>
      <label htmlFor="gridSize">{`${size} x ${size}`}</label>
      <input
        onChange={changeGridSize}
        type="range"
        id="gridSize"
        name="gridSize"
        min="1"
        max="64"
      />
    </div>
  );
};

export default Buttons;
