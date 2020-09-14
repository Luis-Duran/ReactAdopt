import React from "react";
import { render } from "react-dom";
import SearchParams from './SearchParams';

const App = () => {
  // return React.createElement("div", { id: "Something" }, [
  //   React.createElement("h1", {}, "Adopt Me!"),
  //
  //   React.createElement(Pet, {
  //     name: "Benito",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Piojo",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pipe",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  // ]);

  return(
      <div>
        <h1 id="Something">Adopt Me!></h1>
        <SearchParams/>
      </div>
  );
};

render(< App />, document.getElementById("root"));
