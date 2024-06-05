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
          <a href="https://github.com/Maria-Sousa-GH" target="_blank"
            >Maria Sousa</a
          >
          and is open-sourced on
          <a
            href="https://github.com/Maria-Sousa-GH/dictionary-app"
            target="_blank"
            >GitHub</a
          >
          and hosted on
          <a href="https://mariasousagh-dictionary-app.netlify.app/" target="_blank"
            >Netlify</a
          >
        </div>
        </footer>
      </div>
    </div>
  );
}
