import { useState } from "react";
import "./App.css";
import Grid from "./components/grid";
import Githublogo from "./components/githublogo";

const App = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = () => {
    setIsMouseDown(true);
  };
 
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <main onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      <header>
        <h1>Etch-a-sketch</h1>
      </header>
      <div className="container">
        <Grid isMouseDown={isMouseDown} />
      </div>
      <footer>
        <h3>Copyright &copy; 2023 catoverhat</h3>
        <Githublogo />
      </footer>
    </main>
  );
};

export default App;
