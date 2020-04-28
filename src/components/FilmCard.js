import React from "react";

const FilmCard = (data) => {
  if (data.data) {
    const {
      Title,
      imdbID,
      Genre,
      Year,
      Rated,
      Released,
      Plot,
      Director,
      Runtime,
      Error,
    } = data.data;
    if (!Error) {
      return (
        <div className="container">
          <div
            className="card small blue-grey darken-1"
            style={{
              backgroundImage: `linear-gradient(#ee6e72b4, #ee6e72b4) ,url(${
                process.env.REACT_APP_POSTER_URL + imdbID
              })`,
            }}
          >
            <div className="card-content white-text">
              <span className="card-title">
                <strong>{Title}</strong>
              </span>
              <div>
                <span>
                  <strong>Created At</strong>: {Year}
                </span>
              </div>
              <div>
                <span>
                  <strong>Realeased At</strong>: {Released}
                </span>
              </div>
              <div>
                <span>
                  <strong>Rating</strong>: {Rated}
                </span>
              </div>
              <div>
                <span>
                  <strong>Directed by</strong>: {Director}
                </span>
              </div>
              <div>
                <span>
                  <strong>Runtime</strong>: {Runtime}
                </span>
              </div>
              <p>{Plot}</p>
            </div>
            <div className="card-action">
              <div className="left">
                <strong style={{ color: "white" }}>Genre</strong>
                <span className="new badge" data-badge-caption="custom caption">
                  {Genre}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container center">
          <span>{Error}</span>
        </div>
      );
    }
  } else {
    return <span>Loading ..</span>;
  }
};

export default FilmCard;
