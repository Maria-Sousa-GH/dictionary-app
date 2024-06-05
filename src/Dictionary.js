import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {}

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let key = "facba5oe04e0d0e2497c5fe825bta3c4";
    let word = "sunset";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word={word}&key={key}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        {" "}
        <input type="search" onChange={handleKeywordChange}></input>
      </form>
    </div>
  );
}
