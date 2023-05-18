import "./App.css";
import CatalogViewer from "./components/catalogViewer";
import { pic1, pic2, pic3, pic4 } from "./assets/index.js";
import NavBar from "./components/navBar";

function App() {
  const images = [pic1, pic2, pic3, pic4];

  return (
    <div className="app">
      <NavBar />
      <CatalogViewer images={images} />
    </div>
  );
}

export default App;
