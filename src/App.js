import logo from "./shecodeslogo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="text-center">
          This project was coded by
          <a
            href="https://github.com/Maria-Sousa-GH"
            target="_blank"
            rel="noreferrer"
          >
            Maria Sousa
          </a>
          and is open-sourced on
          <a
            href="https://github.com/Maria-Sousa-GH/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          and hosted on
          <a
            href="https://mariasousagh-dictionary-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
