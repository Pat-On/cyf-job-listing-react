import React, { useState } from "react";

import "./App.css";

import JobPostElement from "./JobPostElement";

// DATA
import data from "./data";

function App() {
  const dataFull = data;
  const [searchQueryResult, searchQueryResultHandler] = useState(dataFull);
  const [queryArray, queryArrayHandler] = useState([]);

  const clearSelected = () => {
    queryArrayHandler([]);
    searchQueryResultHandler(dataFull);
  };

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
      if ("Junior" === item || "Midweight" === item || "Senior" === item) {
        return (results = results.filter(
          (jobOffer) => jobOffer.level.toUpperCase() === item.toUpperCase()
        ));
      }
      if ("Frontend" === item || "Fullstack" === item || "Backend" === item) {
        return (results = results.filter(
          (jobOffer) => jobOffer.role.toUpperCase() === item.toUpperCase()
        ));
      }
      results = results.filter((jobOffer) => {
        if (jobOffer.languages.includes(item)) return true;
        if (jobOffer.tools.includes(item)) return true;
        return null; // to quite the warning
      });

      // switch (item) {
      //   case "Junior" === item || "Midweight" === item || "Senior" === item:
      //     return (results = results.filter(
      //       (jobOffer) => jobOffer.level.toUpperCase() === item.toUpperCase()
      //     ));

      //   case "Frontend" || "Fullstack" || "Backend":
      //     return (results = results.filter(
      //       (jobOffer) => jobOffer.role.toUpperCase() === item.toUpperCase()
      //     ));

      //   default:
      //     return (results = results.filter((jobOffer) => {
      //       if (jobOffer.languages.includes(item)) return true;
      //       if (jobOffer.tools.includes(item)) return true;
      //     }));
      // }
    });

    searchQueryResultHandler(results);
  };

  return (
    <div className="App">
      <div
        style={{
          backgroundImage: "url('./images/bg-header-desktop.svg')",
          backgroundColor: "#6ABECD",
          height: "150px",
          width: "100%",
        }}
      ></div>
      <div
        className={queryArray.length === 0 ? "displayNone" : null}
        style={{
          position: "absolute",
          backgroundColor: "white",
          top: "100px",
          height: "100px",
          width: "90%",
          zIndex: "100",
          border: "1px solid #6ABECD",
          left: "0",
          right: "0",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {queryArray.map((item, index) => {
          return (
            <button
              style={{ float: "left" }}
              onClick={(e) => activeSearcher(e, item)}
              className="programmingLanguage"
              key={index}
            >
              {item}
            </button>
          );
        })}
        <button
          style={{
            float: "right",
            backgroundColor: "white",
            color: "#66A1A1",
          }}
          className="programmingLanguage"
          onClick={clearSelected}
        >
          Clear
        </button>
      </div>

      <JobPostElement
        activeSearcher={activeSearcher}
        arrayOfJobs={searchQueryResult}
      />
    </div>
  );
}

export default App;
