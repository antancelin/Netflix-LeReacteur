import "./App.css";

import dataTab from "./assets/data/data.json";

import Header from "./assets/components/header/Header";
import Section from "./assets/components/main/Section";

function App() {
  return (
    <>
      <div className="container">
        <header>
          <Header />
        </header>
        <main>
          <Section data={dataTab} />
        </main>
      </div>
      <footer>
        <p>
          Made with{" "}
          <span>
            <a href="https://fr.react.dev/">React</a>
          </span>{" "}
          at{" "}
          <span>
            <a href="https://www.lereacteur.io/">Le Reacteur</a>
          </span>{" "}
          By{" "}
          <span>
            <a href="https://github.com/antancelin"> Antoine Ancelin</a>
          </span>
        </p>
      </footer>
    </>
  );
}

export default App;
