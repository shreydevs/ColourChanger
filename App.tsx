import React, { useState } from "react";

function App() {
  const colors = JSON.parse(localStorage.getItem("color"));
  const [r, setR] = useState(colors && colors.r ? colors.r : 0);
  const [g, setG] = useState(colors && colors.g ? colors.g : 0);
  const [b, setB] = useState(colors && colors.b ? colors.b : 0);
  const save = () => {
    localStorage.setItem("color", JSON.stringify({ r, g, b }));
  };
  return (
    
    <div style={{
          backgroundColor: "rgb(" + r + "," + g + "," + b + ")",
          height:"100vmin",
          textAlign:"center",
          paddingTop:"150px"
        }}>
      <h1 style={{fontFamily:"times new roman", textShadow:"2px 2px white"}}>Color Mixer</h1>
      
      <label htmlFor="">Red</label>

      <input
        type="range"
        value={r}
        onChange={(event) => setR(event.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />
      <label htmlFor="">Green</label>
      <input
        type="range"
        value={g}
        onChange={(event) => setG(event.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />
      <label htmlFor="">Blue</label>
      <input
        type="range"
        value={b}
        onChange={(event) => setB(event.target.value)}
        min={0}
        max={255}
      />
      <br />
      <br />
      <button onClick={save}>Save Color Combination</button>
    </div>
  );
}

export default App;
