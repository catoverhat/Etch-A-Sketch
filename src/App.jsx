import { useState } from "react";
import "./App.css";
import Grid from "./components/grid";

const App = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div
      className="body"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <Grid isMouseDown={isMouseDown} />
      <footer>Footer</footer>
    </div>
  );
};

export default App;
