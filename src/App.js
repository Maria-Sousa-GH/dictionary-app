import "./App.css";
import logo from "./shecodeslogo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
      </div>

      <main>
        <Dictionary />
      </main>

      <footer className="text-center">
        This project was coded by{" "}
        <a
          href="https://github.com/Maria-Sousa-GH"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Maria Sousa
        </a>{" "}
        and is
        <a
          href="https://https://github.com/Maria-Sousa-GH/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          open-sourced on GitHub.
        </a>
      </footer>
    </div>
  );
}
