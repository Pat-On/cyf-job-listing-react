import React, { useState } from "react";

import "./App.css";

import JobPostElement from "./JobPostElement";

// DATA
import data from "./data";

function App() {
  const [dataFull, dataFullHandler] = useState(data);
  const [searchQueryResult, searchQueryResultHandler] = useState(dataFull);
  const [queryArray, queryArrayHandler] = useState([]);

  const activeSearcher = (_, q) => {
    const query = q;
    let queryArray_New = [...queryArray];

    if (queryArray_New.includes(query)) {
      let indexNo = queryArray_New.findIndex((item) => item === query);
      queryArray_New.splice(indexNo, 1);
      queryArrayHandler(queryArray_New);
    } else {
      queryArray_New = [...queryArray, query];
      queryArrayHandler(queryArray_New);
    }

    console.log(queryArray_New);

    let results = [...dataFull];
    queryArray_New.forEach((item) => {
      switch (item) {
        case "Junior" || "Midweight" || "Senior":
          results = results.filter(
            (jobOffer) => jobOffer.level.toUpperCase() === item.toUpperCase()
          );

          break;
        case "Frontend" || "Fullstack" || "Backend":
          results = results.filter(
            (jobOffer) => jobOffer.role.toUpperCase() === item.toUpperCase()
          );

          break;
        default:
          results = results.filter((jobOffer) => {
            if (jobOffer.languages.includes(item)) return true;
            if (jobOffer.tools.includes(item)) return true;
          });
      }
    });

    searchQueryResultHandler(results);
  };

  return (
    <div className="App">
      <JobPostElement
        activeSearcher={activeSearcher}
        arrayOfJobs={searchQueryResult}
      />
    </div>
  );
}

export default App;
