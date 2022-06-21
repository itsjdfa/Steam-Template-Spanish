import "./App.css";
import Categories from "./Categories";
import config_json from "./review_templates/config_rdr2.json";

function App() {
  return (
    <div>
      <header className="App-header">
        <h2 className="App-header">{"---{ Review Template }---"}</h2>
        <p className="App-header">☑ Increible</p>
      </header>

      <div className="categories-container">
        <Categories props={config_json.categories} />
      </div>

      <footer className="App-footer">
        <p className="signature">Traducido por JDFA, Creado por: Vojtěch Struhár, 2021</p>
      </footer>
    </div>
  );
}

export default App;
