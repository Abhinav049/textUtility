import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar";
import Form from "./components/form";
function App() {
  const [style, setStyle] = useState({
    color: "#3b3b55",
    backgroundColor: "#e0f0f5",
    fontSize: "30px",
    padding: "20px",
    borderRadius: "10px",
  });
  const [clicked, setClicked] = useState("Light Mode");
  const newStyle = () => {
    if (clicked === "Light Mode") {
      setStyle({
        color: "white",
        backgroundColor: "rgb(79 75 75)",
        fontSize: "30px",
        padding: "20px",
        borderRadius: "10px",
      });
      setClicked("Dark Mode");
      document.title = "Text Utility App - Dark Mode";
      // document.body.style.backgroundColor = "black";
    } else {
      setStyle({
        color: "#3b3b55",
        backgroundColor: "#e0f0f5",
        fontSize: "30px",
        padding: "20px",
        borderRadius: "10px",
      });
      setClicked("Light Mode");
      document.title = "Text Utility App - Light Mode";
      // document.body.style.backgroundColor = "eaf5ff";
    }
  };

  {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <Navbar
          style={style}
          newStyle={newStyle}
          clicked={clicked}
          title="Home"
        />
        <br></br>
        <Form style={style} />
      </div>
    );
  }
}
export default App;
