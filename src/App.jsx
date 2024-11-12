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
    </>
  );
}

export default App;
