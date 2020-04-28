import React, { useState, useEffect } from "react";
import FilmCard from "./FilmCard";

function Main() {
  const [searchString, setSearchString] = useState("Avengers");
  const [data, setData] = useState();

  // fetch preview data
  useEffect(() => {
    fetch(process.env.REACT_APP_FIRST_FETCH_URL)
      .then((result) => result.json())
      .then((result) => {
        setData(result);
      });
  }, []);

  const Submit = (event) => {
    event.preventDefault();
    // fetch movie data from omdbapi.com
    fetch(process.env.REACT_APP_DATA_URL + searchString)
      .then((result) => result.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // hanlde change of searchString state
  const handleSearchStringChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <div className="container">
      <div className="pt-3">
        <div className="input-field">
          <form onSubmit={Submit}>
            <label htmlFor="first_name">Search For MovieApp</label>
            <input
              placeholder="Avengers"
              id="first_name"
              type="text"
              className="validate"
              onChange={handleSearchStringChange}
            />
          </form>
        </div>
      </div>
      <FilmCard data={data} />
    </div>
  );
}

export default Main;
