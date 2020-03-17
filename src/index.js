import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function App() {
  const [books, setBooks] = useState(null);

  const fetchData = async () => {
    const response = await axios.get(
      "https://covid19-json-api.herokuapp.com/data"
    );
    console.log(response.data);
    setBooks(response.data);
  };

  fetchData();

  return (
    <div className="App">
      <h2>Fetch a list from an API and display it</h2>

      {/* Display data from API */}
      <div className="books">
        {books &&
          books.map((book, index) => {
            return (
              <div className="book" key={index}>
                <h2>{book.Country_Region}</h2>

                <div className="details">
                  <p>Confirmed: {book.Confirmed}</p>
                  <p>Deaths: {book.Deaths}</p>
                  <p>Recovered: {book.Recovered}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
